import LayoutAuth from "@/layout/auth";
import { env } from "@/next.config";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function daftar_dokter() {
    const router = useRouter()
    const [form_daftar, set_form_daftar] = useState({
        nama: null,
        email: null,
        jenis_kelamin: 'laki-laki',
        password: null,
    })
    const input_email = (e) => {
        set_form_daftar({ ...form_daftar, email: e.target.value })
    }
    const input_nama = (e) => {
        set_form_daftar({ ...form_daftar, nama: e.target.value })
    }
    const input_jenis_kelamin = (e) => {
        set_form_daftar({ ...form_daftar, jenis_kelamin: e.target.value })
    }
    const input_password = (e) => {
        set_form_daftar({ ...form_daftar, password: e.target.value })
    }
    const [error_data, set_error_data] = useState({
        nama: null,
        email: null,
        jenis_kelamin: null,
        password: null,
    })
    const [alert_error, set_alert_error] = useState();
    const login = () => {
        axios({
            url: `${env.url}/user/pasien/register`,
            method: 'post',
            data: form_daftar
        }).then(
            (res) => {
                router.push('/auth/pasien')
            },
            (error) => {
                switch (error.response.status) {
                    case 400:
                        get_error(error.response.data.message);
                        break;

                    case 409:
                        set_error_data({ ...error_data, nama: '', email: '', password: '', jenis_kelamin: '' })
                        set_alert_error(error.response.data.message);
                        break;

                    default:
                        break;
                }
            },
        )
    }
    const get_error = (data) => {
        const error = data.reduce((key, item) => {
            const { field } = item;
            key[field] = item.message
            return key;
        }, {})
        set_error_data({ ...error_data, nama: error.nama, email: error.email, password: error.password, jenis_kelamin: error.jenis_kelamin })
    }
    useEffect(() => {
        if (!env.url) {
            router.push('/')
        }
    })
    return (
        <LayoutAuth>
            <p class="fs-5 fw-bold text-success">
                Daftar MediCare Sekarang!
            </p>
            <div className="mb-3">
                {alert_error && <div class="alert alert-danger" role="alert">
                    {alert_error}
                </div>}
                <div class="mb-3">
                    <label class="form-label">Nama <b class="text-danger">*</b></label>
                    <input type="text" class="form-control" id="nama" placeholder="Masukkan nama" value={form_daftar.nama} onChange={input_nama} />
                    {error_data.nama && <label class="text-danger">{error_data.nama}</label>}
                </div>
                <div class="mb-3">
                    <label class="form-label">Jenis Kelamin <b class="text-danger">*</b></label>
                    <select class="form-select" aria-label="Default select example" value={form_daftar.jenis_kelamin} onChange={input_jenis_kelamin}>
                        <option value="laki-laki">Laki-Laki</option>
                        <option value="perempuan">Perempuan</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label class="form-label">Email <b class="text-danger">*</b></label>
                    <input type="email" class="form-control" id="email" placeholder="name@example.com" value={form_daftar.email} onChange={input_email} />
                    {error_data.email && <label class="text-danger">{error_data.email}</label>}
                </div>
                <div class="mb-3">
                    <label class="form-label">Password <b class="text-danger">*</b></label>
                    <input type="password" class="form-control" id="password" placeholder="Password" value={form_daftar.password} onChange={input_password} />
                    {error_data.password && <label class="text-danger">{error_data.password}</label>}
                </div>
            </div>
            <div class="mb-3">
                <p class="text-center fs-6">Dengan menekan tombol <b class="text-success">Daftar</b>, Anda setuju dengan semua <br></br>
                    <b class="text-success">Syarat & ketentuan</b> serta <b class="text-success">Kebijakam Privasi</b> yang berlaku
                </p>
            </div>
            <div className="w-100 mb-2">
                <button onClick={login} class="btn w-100 btn-success btn-primary" type="button">Daftar</button>
            </div>
            <div class="text-center">
                Sudah punya akun ?  <Link href="/auth"><b class="text-success">Masuk disini</b></Link>
            </div>
        </LayoutAuth>
    )
}