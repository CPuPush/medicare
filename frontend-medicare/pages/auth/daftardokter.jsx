import LayoutAuth from "@/layout/auth";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { env } from "@/next.config";
import { useRouter } from "next/router";

export default function daftar_dokter() {
    const router = useRouter()
    const [Nama, setNama] = useState("")
    const inputNama = (e) => {
        setNama(e.target.value);
    }
    const [JenisKelamin, setJenisKelamin] = useState('laki-laki')
    const inputJenisKelamin = (e) => {
        setJenisKelamin(e.target.value);
    }
    const [noSTR, setnoSTR] = useState('')
    const inputnoSTR = (e) => {
        setnoSTR(parseInt(e.target.value));
    }
    const [Email, setEmail] = useState('')
    const inputEmail = (e) => {
        setEmail(e.target.value);
    }
    const [Password, setPassword] = useState('')
    const inputPassword = (e) => {
        setPassword(e.target.value);
    }
    const submit = () => {
        const formDaftar = {
            nama: Nama,
            email: Email,
            password: Password,
            no_str: noSTR,
            jenis_kelamin: JenisKelamin,
        }
        axios({
            url: `${env.url}/user/dokter/register`,
            method: 'post',
            data: formDaftar
        }).then((res) => {
            router.push('/auth/dokter')
        }, (error) => {
            const response = error.response.status
            switch (response) {
                case 400:
                    errorAlert(error.response.data.message)
                    break;
                case 409:
                    setErrorMessage({
                        ...ErrorMessage,
                        "nama": '',
                        "email": '',
                        "password": '',
                        "no_str": error.response.data.message,
                    })
                    break;

                default:
                    break
            }
        })
    }
    const [ErrorMessage, setErrorMessage] = useState({
        nama: "",
        no_str: null,
        email: "",
        password: "",
    })
    const errorAlert = async (data) => {
        const error = await data.reduce((result, item) => {
            const { field } = item;
            result[field] = item.message
            return result
        }, {});

        setErrorMessage({
            ...ErrorMessage,
            "nama": error.nama,
            "email": error.email,
            "password": error.password,
            "no_str": error.no_str,
        })
    }

    useEffect(() => {
        if (!env.url) {
            router.push("/")
        }
    })
    return (
        <LayoutAuth>
            <p class="fs-5 fw-bold text-success">
                Daftar MediCare Sekarang!
            </p>
            <div class="mb-3">
                <div class="mb-3">
                    <label class="form-label">Nama <b class="text-danger">*</b></label>
                    <input type="text" class="form-control" value={Nama} onChange={inputNama} />
                    {ErrorMessage.nama && <label class="label text-danger">{ErrorMessage.nama}</label>}
                </div>
                <div class="mb-3">
                    <label class="form-label">Jenis Kelamin <b class="text-danger">*</b></label>
                    <select class="form-select" aria-label="Default select example" value={JenisKelamin} onChange={inputJenisKelamin}>
                        <option value="laki-laki">Laki-Laki</option>
                        <option value="perempuan">Perempuan</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label class="form-label">No. STR <b class="text-danger">*</b></label>
                    <input type="number" class="form-control" value={noSTR} onChange={inputnoSTR} />
                    {ErrorMessage.no_str && <label class="label text-danger">{ErrorMessage.no_str}</label>}
                </div>
                <div class="mb-3">
                    <label class="form-label">Email <b class="text-danger">*</b></label>
                    <input type="email" class="form-control" value={Email} onChange={inputEmail} />
                    {ErrorMessage.email && <label class="label text-danger">{ErrorMessage.email}</label>}
                </div>
                <div class="mb-3">
                    <label class="form-label">Password <b class="text-danger">*</b></label>
                    <input type="password" class="form-control" value={Password} onChange={inputPassword} />
                    {ErrorMessage.password && <label class="label text-danger">{ErrorMessage.password}</label>}
                </div>
            </div>
            <div class="mb-3">
                <p class="text-center fs-6">Dengan menekan tombol <b class="text-success">Daftar</b>, Anda setuju dengan semua <br></br>
                    <b class="text-success">Syarat & ketentuan</b> serta <b class="text-success">Kebijakam Privasi</b> yang berlaku
                </p>
            </div>
            <div class="w-100 mb-2">
                <button onClick={() => submit()} class="btn w-100 btn-success btn-primary" type="button">Daftar</button>
            </div>
            <div class="text-center">
                Sudah punya akun ?  <Link href="/auth"><b class="text-success">Masuk disini</b></Link>
            </div>
        </LayoutAuth>
    )
}