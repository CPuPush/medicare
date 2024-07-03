import LayoutAuth from "@/layout/auth";
import { env } from "@/next.config";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function login_dokter() {
    const router = useRouter()
    const [FormLogin, setFormLogin] = useState({
        email: "",
        password: "",
    })
    const inputEmail = (e) => {
        setFormLogin({ ...FormLogin, email: e.target.value })
    }
    const inputPassword = (e) => {
        setFormLogin({ ...FormLogin, password: e.target.value })
    }
    const [ShowAlert, setShowAlert] = useState()
    const login = () => {
        axios({
            url: `${env.url}/user/dokter/login`,
            method: "post",
            data: FormLogin
        }).then(
            async (res) => {
                env.token = await res.data.data.token
                env.refresh_token = await res.data.data.refresh_token
                env.user = await res.data.data.user
                router.push("/dokter/beriakses/all")
            },
            (error) => {
                switch (error.response.status) {
                    case 400:
                        getError(error.response.data.message)
                        break;
                    case 404:
                        setError({ ...Error, email: '', password: '' })
                        setShowAlert(error.response.data.message)
                        break;

                    case 403:
                        setError({ ...Error, email: '', password: '' })
                        setShowAlert(error.response.data.message)
                        break;

                    default:
                        break;
                }
            },
        )
        // router.push('/dokter/riwayatpasien')
    }
    const [Error, setError] = useState({
        email: null,
        password: null,
    })
    const getError = (data) => {
        const error = data.reduce((result, item) => {
            const { field } = item;
            result[field] = item.message
            return result
        }, {})
        setError({ ...Error, email: error.email, password: error.password })
    }

    useEffect(() => {
        if (!env.url) {
            router.push('/')
        }
    })
    return (
        <LayoutAuth>
            <p class="fs-1 fw-bold text-success">MediCare</p>
            <div class="mb-4">
                {ShowAlert && <div class="alert alert-danger" role="alert">
                    {ShowAlert}
                </div>}
                <div class="mb-3">
                    <input type="email" class="form-control" id="email" placeholder="Email dokter" value={FormLogin.email} onChange={inputEmail} />
                    {Error.email && <label class="text-danger">{Error.email}</label>}
                </div>
                <div class="mb-3">
                    <input type="password" class="form-control" id="password" placeholder="Password" value={FormLogin.password} onChange={inputPassword} />
                    {Error.password && <label class="text-danger">{Error.password}</label>}
                </div>
            </div>
            <div class="text-success text-success-emphasis mb-2">
                Lupa password ?
            </div>
            <div className="w-100 mb-2">
                <button onClick={login} class="btn w-100 btn-primary" type="button">Login</button>
            </div>
            <div class="text-center">
                Belum punya akun ?  <Link href="/auth/daftardokter"><b class="text-success">Daftar disini</b></Link>
            </div>
        </LayoutAuth>
    )
}