import MainLayout from "@/layout/main";
import { env } from "@/next.config";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function data_pasien() {
    const router = useRouter()
    const [data_pasien, set_data_pasien] = useState()
    const { id } = router.query
    const get_data_medis = () => {
        axios({
            url: `${env.url}/medical-record/${id}`,
            method: "get",
            headers: {
                Authorization: env.token
            },
        }).then((res) => {
            console.log(res);
            set_data_pasien(res.data.data)
        })
    }
    useEffect(() => {
        get_data_medis()
    }, [])
    return (
        <MainLayout>
            <div className="row bg-white">
                <div className="text-center fw-bold fs-5">
                    Hasil Pemeriksaan Kesehatan
                </div>
                <div className="text-center fw-bold fs-5 mb-4">
                    (Medical Record)
                </div>


                <div className="row">
                    <div className="col">
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 fw-bold col-form-label">Nama</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].nama} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 fw-bold col-form-label">Jenis Kelamin</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].jenis_kelamin} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 fw-bold col-form-label">Tanggal Lahir</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tanggal_lahir} />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <label for="staticEmail" class="col col-form-label fw-bold">No Rekam Medis</label>
                            <div class="col-sm-8">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].no_rekam_medis} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col col-form-label fw-bold">Tgl Pemeriksaan</label>
                            <div class="col-sm-8">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tgl_pemeriksaan} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col col-form-label fw-bold fs-6">Tujuan Pemeriksaan</label>
                            <div class="col-sm-8">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tujuan_pemeriksaan} />
                            </div>
                        </div>
                    </div>
                    <div className="border-bottom">
                        <div className="row">
                            <label for="staticEmail" class="col col-form-label fw-bold fs-6">Umur</label>
                            <div class="col-11">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].umur} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col col-form-label fw-bold fs-6">Alamat</label>
                            <div class="col-sm-11">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].alamat} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 fw-bold text-center py-4">Anamnesa</div>
                    <div className="col-3 fw-bold">Riwayat Kesehatan</div>
                    <div className="col ">
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Riwayat Penyakit dahulu</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_anamnesas?.[0]?.riwayat_penyakit_dahulu} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Riwayat Penyakit Keluarga</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_anamnesas?.[0]?.riwayat_penyakit_keluarga} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Riwayat Kecelakaan</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_anamnesas?.[0]?.riwayat_kecelakaan} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Riwayat Perawatan
                                Rumah Sakit </label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_anamnesas?.[0]?.riwayat_perawatan_rumah_sakit} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Riwayat Operasi</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_anamnesas?.[0]?.riwayat_operasi} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 border-bottom mb-2"></div>
                </div>
                <div className="row">
                    <div className="col-3 fw-bold">Kebiasaan</div>
                    <div className="col ">
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Merokok</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_anamnesas?.[0]?.merokok} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Minum Alkohol</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_anamnesas?.[0]?.minum_alkohol} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Olahraga</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_anamnesas?.[0]?.olahraga} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 border-bottom mb-2"></div>
                </div>

                <div className="row">
                    <div className="col-12 fw-bold text-center py-4">Pemeriksaan Fisik</div>
                    <div className="col-3 fw-bold">Keadaan Umum</div>
                    <div className="col ">
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Tinggi Badan</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_pemeriksaan_fisiks?.[0]?.tinggi_badan} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Berat Badan</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_pemeriksaan_fisiks?.[0]?.berat_badan} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Kulit</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_pemeriksaan_fisiks?.[0]?.kulit} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Sistem Limfa</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_pemeriksaan_fisiks?.[0]?.sistem_limfa} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Thyroid</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_pemeriksaan_fisiks?.[0]?.thyroid} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 border-bottom mb-2"></div>
                </div>
                <div className="row">
                    <div className="col-3 fw-bold">Sistem Kardiovaskular</div>
                    <div className="col ">
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Denyut Nadi</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_pemeriksaan_fisiks?.[0]?.denyut_nadi} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Karakter</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_pemeriksaan_fisiks?.[0]?.karakter} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Vena</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_pemeriksaan_fisiks?.[0]?.vena} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Oedema</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_pemeriksaan_fisiks?.[0]?.oedema} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Tekanan Darah</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_pemeriksaan_fisiks?.[0]?.tekanan_darah} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Detak Jantung</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_pemeriksaan_fisiks?.[0]?.detak_jantung} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Mur-Mur Jantung</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_pemeriksaan_fisiks?.[0]?.mur_mur_jantung} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 border-bottom mb-2"></div>
                </div>
                <div className="row">
                    <div className="col-3 fw-bold">Sistem Pernafasan</div>
                    <div className="col ">
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Frequensi Nafas</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_pemeriksaan_fisiks?.[0]?.frekuensi_nafas} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Trachea</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_pemeriksaan_fisiks?.[0]?.trachea} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Inspeksi</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_pemeriksaan_fisiks?.[0]?.inspeksi} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Palpasi</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_pemeriksaan_fisiks?.[0]?.palpasi} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Auskultasi</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_pemeriksaan_fisiks?.[0]?.auskultasi} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Perkusi</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_pemeriksaan_fisiks?.[0]?.perkusi} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 border-bottom mb-2"></div>
                </div>
                <div className="row">
                    <div className="col-3 fw-bold">Sistem Gastrointestinal</div>
                    <div className="col ">
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Mulut</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_pemeriksaan_fisiks?.[0]?.mulut} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Hati</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_pemeriksaan_fisiks?.[0]?.hati} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Limpa</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_pemeriksaan_fisiks?.[0]?.limpa} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Massa</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_pemeriksaan_fisiks?.[0]?.massa} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Colok Dubur</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_pemeriksaan_fisiks?.[0]?.colok_dubur} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 border-bottom mb-2"></div>
                </div>
                <div className="row">
                    <div className="col-3 fw-bold">Genito Urinary System</div>
                    <div className="col ">
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Ginjal</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_pemeriksaan_fisiks?.[0]?.ginjal} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 border-bottom mb-2"></div>
                </div>
                <div className="row">
                    <div className="col-3 fw-bold">Sistem Syaraf Pusat</div>
                    <div className="col ">
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Saraf Cranial</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_pemeriksaan_fisiks?.[0]?.saraf_cranial} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Sistem Motorik</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_pemeriksaan_fisiks?.[0]?.sistem_motorik} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Sistem Sensorik</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_pemeriksaan_fisiks?.[0]?.sistem_sensorik} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Refleks</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_pemeriksaan_fisiks?.[0]?.refleks} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 border-bottom mb-2"></div>
                </div>
                <div className="row">
                    <div className="col-12 fw-bold text-center py-4">Laoratorium</div>
                    <div className="col-3 fw-bold">Hematologi</div>
                    <div className="col ">
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Hb</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.hb} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Leukosit</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.leukosit} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">LED</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.led} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Eritrosit</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.eritrosit} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Hematokrit</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.hematrokit} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Trombosit</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.trombosit} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Golongan Darah</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.golongan_darah} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">MCV</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.mcv} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">MCH</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.mch} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">MCHC</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.mchc} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label fw-bold">Hitung Jenis</label>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Basofil</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.basofil} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Eosinofil</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.eosinofil} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">N.Batang</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.n_batang} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">N.Segmen</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.n_segmen} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Limfosit</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.limfosit} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Monosit</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.monosit} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 border-bottom mb-2"></div>
                </div>
                <div className="row">
                    <div className="col-3 fw-bold">Kimia Klinik</div>
                    <div className="col ">
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Gula Darah Puasa</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.gula_darah_puasa} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Total Kolestrol</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.total_kolesterol} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">HDL</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.hdl} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">LDL</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.ldl} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Trigliserida</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.trigliserida} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Ureum Darah</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.ureum_darah} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Keratinin Darah</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.kreatinin_darah} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Asam Urat</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.asam_urat} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">SGOT</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.sgot} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">SGPT</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.sgpt} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 border-bottom mb-2"></div>
                </div>
                <div className="row">
                    <div className="col-3 fw-bold">Urinalisis</div>
                    <div className="col ">
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label fw-bold">Makroskopis</label>
                            <div className="row">
                                <label for="staticEmail" class="col-sm-3 col-form-label">Warna</label>
                                <div class="col-sm-9">
                                    <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.warna} />
                                </div>
                            </div>
                            <div className="row">
                                <label for="staticEmail" class="col-sm-3 col-form-label">Kekeruhan</label>
                                <div class="col-sm-9">
                                    <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.kekeruhan} />
                                </div>
                            </div>
                            <div className="row">
                                <label for="staticEmail" class="col-sm-3 col-form-label">Berat Jenis</label>
                                <div class="col-sm-9">
                                    <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.berat_jenis} />
                                </div>
                            </div>
                            <div className="row">
                                <label for="staticEmail" class="col-sm-3 col-form-label">pH</label>
                                <div class="col-sm-9">
                                    <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.ph} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label fw-bold">Mikroskopis</label>
                            <div className="row">
                                <label for="staticEmail" class="col-sm-3 col-form-label">Leukosit</label>
                                <div class="col-sm-9">
                                    <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.leukosit} />
                                </div>
                            </div>
                            <div className="row">
                                <label for="staticEmail" class="col-sm-3 col-form-label">Eritrosit</label>
                                <div class="col-sm-9">
                                    <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.eritrosit} />
                                </div>
                            </div>
                            <div className="row">
                                <label for="staticEmail" class="col-sm-3 col-form-label">Silinder</label>
                                <div class="col-sm-9">
                                    <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.silinder} />
                                </div>
                            </div>
                            <div className="row">
                                <label for="staticEmail" class="col-sm-3 col-form-label">Kristal</label>
                                <div class="col-sm-9">
                                    <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.kristal} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label fw-bold">Kimia</label>
                            <div className="row">
                                <label for="staticEmail" class="col-sm-3 col-form-label">Protein</label>
                                <div class="col-sm-9">
                                    <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.protein} />
                                </div>
                            </div>
                            <div className="row">
                                <label for="staticEmail" class="col-sm-3 col-form-label">Glukosa</label>
                                <div class="col-sm-9">
                                    <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.glukosa} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Epitel</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.epitel} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Bilirubin</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.bilirubin} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Urobilin</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.urobilin} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Benda Keton</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_laboratoria?.[0]?.benda_keton} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 border-bottom mb-2"></div>
                </div>
                <div className="row">
                    <div className="col-12 fw-bold text-center py-4">Pemeriksaan Lainnya</div>
                    <div className="col-3 fw-bold">Rotgen</div>
                    <div className="col ">
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Jantung</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_pemeriksaan_lainnyas?.[0]?.jantung} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Paru</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_pemeriksaan_lainnyas?.[0]?.paru} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">EKG</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_pemeriksaan_lainnyas?.[0]?.ekg} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 border-bottom mb-2"></div>
                    <div className="col-3 fw-bold">Kesimpulan</div>
                    <div className="col ">
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Kesimpulan</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_kesimpulans?.[0]?.kesimpulan} />
                            </div>
                        </div>
                        <div className="row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Anjuran</label>
                            <div class="col-sm-9">
                                <input type="text" disabled readonly class="form-control-plaintext" value={data_pasien?.[0].tb_kesimpulans?.[0]?.anjuran} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}