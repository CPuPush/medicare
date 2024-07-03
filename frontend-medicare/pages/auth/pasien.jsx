import LayoutAuth from "@/layout/auth";
import { env } from "@/next.config";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function login_dokter() {
  const router = useRouter();
  const [ShowAlert, setShowAlert] = useState();
  const [error_data, set_error_data] = useState({
    email: null,
    password: null,
  });
  const [form_login, set_form_login] = useState({
    email: "",
    password: "",
  });
  const input_email = (e) => {
    set_form_login({ ...form_login, email: e.target.value });
  };
  const input_password = (e) => {
    set_form_login({ ...form_login, password: e.target.value });
  };
  const login = () => {
    axios({
      url: `${env.url}/user/pasien/login`,
      method: "post",
      data: form_login,
    }).then(
      (res) => {
        env.token = res.data.data.token;
        env.user = res.data.data.user;
        console.log("Token:", env.token);
        const { token } = env.token;
        sessionStorage.setItem("token", token);
        router.push("/pasien/riwayatpasien");
      },
      (error) => {
        switch (error.response.status) {
          case 400:
            getError(error.response.data.message);
            break;
          case 404:
            set_error_data({ ...error_data, email: "", password: "" });
            setShowAlert(error.response.data.message);
            break;

          default:
            break;
        }
      }
    );
  };
  const getError = (data) => {
    const error = data.reduce((key, item) => {
      const { field } = item;
      key[field] = item.message;
      return key;
    }, {});
    set_error_data({
      ...error_data,
      email: error.email,
      password: error.password,
    });
  };
  useEffect(() => {
    if (!env.url) {
      router.push("/");
    }
  });
  return (
    <LayoutAuth>
      <p class="fs-1 fw-bold text-success">MediCare</p>
      <div class="mb-4">
        {ShowAlert && (
          <div class="alert alert-danger" role="alert">
            {ShowAlert}
          </div>
        )}
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Email pasien"
            value={form_login.email}
            onChange={input_email}
          />
          {error_data.email && (
            <label class="text-danger">{error_data.email}</label>
          )}
        </div>
        <div class="mb-3">
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Password"
            value={form_login.password}
            onChange={input_password}
          />
          {error_data.password && (
            <label class="text-danger">{error_data.password}</label>
          )}
        </div>
      </div>
      <div class="text-success text-success-emphasis mb-2">Lupa password ?</div>
      <div className="w-100 mb-2" onClick={login}>
        <button class="btn w-100 btn-primary" type="button">
          Login
        </button>
      </div>
      <div class="text-center">
        Belum punya akun ?{" "}
        <Link href="/auth/daftarpasien">
          <b class="text-success">Daftar disini</b>
        </Link>
      </div>
    </LayoutAuth>
  );
}
