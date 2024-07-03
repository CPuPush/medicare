const {tb_media} = require('../models');
const express = require('express');
const router = express.Router();
const crypto = require('crypto');

// Multer
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({storage: storage});

// AWS S3
const { S3Client,PutObjectCommand, GetObjectCommand, DeleteObjectCommand } = require("@aws-sdk/client-s3");
const {getSignedUrl} = require('@aws-sdk/s3-request-presigner');
const { where } = require('sequelize');

// S3 access
const bucketName = process.env.AWS_BUCKET_NAME;
const bucketRegion = process.env.AWS_BUCKET_REGION;
const accessKey = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new S3Client({
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretAccessKey
  },
  region: bucketRegion
});

//generate name
const randomImageName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex');

router.post('/:tbMedicalRecordId', upload.single('file'), async (req, res) => {
  try {
    const {tbMedicalRecordId} = req.params;
    // const file = req.file;
    
    
    
    const keys = randomImageName();
    const params = {
      Bucket: bucketName,
      Key: keys,
      Body: req.file.buffer,
      ContentType: req.file.mimetype
    }
    console.log(params.Body);

    const command = new PutObjectCommand(params);
    
    await s3.send(command)

    await tb_media.create({
      image_url: keys,
      tbMedicalRecordId
    })

    return res.status(200).json({
      status: 'success',
      message: 'Gambar berhasil diupload',
    })

  } catch (error) {
    return res.status(500).json(error);
  }
});

//get by data medical
router.get('/:tbMedicalRecordId', async (req, res) => {
  try {
    const {tbMedicalRecordId} = req.params;
    const datas = await tb_media.findAll({
      where: {
        tbMedicalRecordId
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    });

    for (const data of datas){
      const getObjectParams = {
        Bucket: bucketName,
        Key: data.image_url,
      }
      const command = new GetObjectCommand(getObjectParams);
      const url = await getSignedUrl(s3, command, {expiresIn: 3600});
      data.image_url = url
    }
    return res.status(200).json({
      status: 'success',
      data: datas
    });
  } catch (error) {
    return res.status(500).json(error);
  }
});

//get by data id

router.get('/data/:id', async(req, res) => {
try {
  const {id} = req.params;
  const data = await tb_media.findOne({
    where:{
      id
    }
  });
  
  const params = {
    Bucket: bucketName,
    Key: data.image_url,
  }

  const command = new GetObjectCommand(params);
  const url = await getSignedUrl(s3, command, {expiresIn: 3600});
  data.image_url = url

  return res.status(200).json({
      status: 'success',
      data
  })

} catch (error) {
  return res.status(500).json(error);
}
});

router.put('/data/:id', upload.single('file'), async (req, res) => {
  try {
    const { id } = req.params;

    // Search in db
    const data = await tb_media.findOne({
      where: {
        id
      }
    });

    if (!data) {
      return res.status(404).json({
        status: 'error',
        message: "data tidak ditemukan"
      });
    }

    // Generate new image name
    const newImageName = randomImageName();
    console.log(newImageName);
    
    // Upload new image to S3
    const uploadParams = {
      Bucket: bucketName,
      Key: newImageName,
      Body: req.file.buffer,
      ContentType: req.file.mimetype
    };

    const uploadCommand = new PutObjectCommand(uploadParams);
    await s3.send(uploadCommand);

    // Delete old image from S3
    const deleteParams = {
      Bucket: bucketName,
      Key: data.image_url
    };

    

    const deleteCommand = new DeleteObjectCommand(deleteParams);
    await s3.send(deleteCommand);

    // Update database with new image URL
    data.image_url = newImageName;
    await data.save();

    return res.status(200).json({
      status: 'success',
      message: 'Gambar berhasil diperbarui',
      data
    });

  } catch (error) {
    return res.status(500).json(error);
  }
});

router.delete('/:tbMedicalRecordId', async (req, res) => {
  try {
    const {tbMedicalRecordId} = req.params;
    const datas = await tb_media.findAll({
      where:{
        tbMedicalRecordId
      }
    })
    
    //loop when data is array
    for (const data of datas){
      const params = {
        Bucket : bucketName,
        Key: data.image_url
      }

      const command = new DeleteObjectCommand(params);

      await s3.send(command);

      await tb_media.destroy({
        where: {
          tbMedicalRecordId
        }
      })
    }

    return res.status(200).json({
      status: "success",
      message : "gambar berhasil dihapus"
    })
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;