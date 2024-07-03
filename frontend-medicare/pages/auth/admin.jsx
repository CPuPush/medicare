import LayoutAuth from "@/layout/auth";
import { env } from "@/next.config";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function login_dokter() {
    const router = useRouter()
    const [form_data, set_form_data] = useState({
        email: null,
        password: null,
    })
    const [Error, set_Error] = useState({
        email: null,
        password: null,
    })
    const inputEmail = (e) => {
        set_form_data({...form_data,email: e.target.value})
    }
    const inputPassword = (e) => {
        set_form_data({...form_data,password: e.target.value})
    }
    const [alert_error, set_alert_error] = useState()
    const login = () => {
        axios({
            url: `${env.url}/user/admin/login`,
            method: "post",
            data: form_data
        }).then(
            (res) => {
                env.user = res.data.data.user
                env.refresh_token = res.data.data.refreshToken
                env.token = res.data.data.token
                router.push('/admin/verifikasi')
            },
            (error) => {
                switch (error.response.status) {
                    case 400:
                        getError(error.response.data.message)
                        break;
                    case 404:
                        set_Error({ ...Error, email: '', password: '' })
                        set_alert_error(error.response.data.message)
                        break;

                    default:
                        break;
                }
            },
        )
    }
    const getError = (data) => {
        const error = data.reduce((key, value) => {
            const { field } = value
            key[field] = value.message
            return key
        }, {})
        set_Error({ ...Error, email: error.email, password: error.password })
    }
    return (
        <LayoutAuth>
            <p class="fs-1 fw-bold text-success">MediCare</p>
            <div class="mb-4">
            {alert_error && <div class="alert alert-danger" role="alert">
                    {alert_error}
                </div>}
                <div class="mb-3">
                    <input type="email" class="form-control" id="email" placeholder="Email Admin" value={form_data.email} onChange={inputEmail} />
                    {Error.email && <label class="text-danger">{Error.email}</label>}
                </div>
                <div class="mb-3">
                    <input type="password" class="form-control" id="password" placeholder="Password" value={form_data.password} onChange={inputPassword}/>
                    {Error.password && <label class="text-danger">{Error.password}</label>}
                </div>
            </div>
            <div className="w-100 mb-2">
                <button onClick={login} class="btn w-100 btn-primary" type="button">Login</button>
            </div>
        </LayoutAuth>
    )
}