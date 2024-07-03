import { env } from "@/next.config";
import Link from "next/link";
import { useRouter } from "next/router";
import { Children, useEffect, useRef } from "react";

export default function MainLayout({ children }) {
  const router = useRouter();
  const path = router.pathname;
  const RiwayatPasienUrl = () => {
    router.push("/pasien/riwayatpasien");
  };
  const pasienAkses = () => {
    router.push("/dokter/beriakses/all");
  };
  const beriAkses = () => {
    router.push("/pasien/beriakses/all");
  };
  const Verifikasi = () => {
    router.push("/admin/verifikasi");
  };
  const logout = () => {
    env.user = {};
    env.token = null;
    env.refresh_token = null;
    router.push("/auth");
  };
  const activeItem = (data) => {
    if (path == data) {
      return "row mb-3 w-100 h-100 border-bottom border-4 py-2 gx-9";
    } else {
      return "row mb-3 w-100 h-100 py-2 gx-9";
    }
  };
  const pasien = env.user.role == "pasien";
  const dokter = env.user.role == "dokter";
  const admin = env.user.role == "admin";

  useEffect(() => {
    if (!env?.user?.role) {
      // router.push('/')
    }
  });
  return (
    <div className="row vh-100 vw-100 overflow-hidden">
      <div className="col-2 h-100 p-2 sidebar-color">
        <div className="col text-center fw-bold fs-4 p-2">Medical Record</div>
        <div className="col">
          {dokter && (
            <div className="row justify-content-center">
              <div
                className="circle"
                style={{
                  backgroundColor: "#3ae365",
                  borderRadius: "50%",
                  width: "150px",
                  height: "150px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80px"
                  height="80px"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224 256a128 128 0 1 0 0-256a128 128 0 1 0 0 256zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16s7.2-16 16-16v-24c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-40c0-29.8 20.4-54.9 48-62v-57.1c-6-.6-12.1-.9-18.3-.9h-91.4c-6.2 0-12.3.3-18.3.9v65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7v-59.1zM144 448a24 24 0 1 0 0-48a24 24 0 1 0 0 48z"
                  />
                </svg>
              </div>
            </div>
          )}
          {pasien && (
            <div className="row justify-content-center">
              <div
                className="circle"
                style={{
                  backgroundColor: "#3ae365",
                  borderRadius: "50%",
                  width: "150px",
                  height: "150px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80px"
                  height="80px"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224 256a128 128 0 1 0 0-256a128 128 0 1 0 0 256zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16s7.2-16 16-16v-24c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-40c0-29.8 20.4-54.9 48-62v-57.1c-6-.6-12.1-.9-18.3-.9h-91.4c-6.2 0-12.3.3-18.3.9v65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7v-59.1zM144 448a24 24 0 1 0 0-48a24 24 0 1 0 0 48z"
                  />
                </svg>
              </div>
            </div>
          )}
          {admin && (
            <div className="row justify-content-center">
              <div
                className="circle"
                style={{
                  backgroundColor: "#3ae365",
                  borderRadius: "50%",
                  width: "150px",
                  height: "150px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80px"
                  height="80px"
                  viewBox="0 0 36 36"
                >
                  <circle
                    cx="14.67"
                    cy="8.3"
                    r="6"
                    fill="currentColor"
                    class="clr-i-solid clr-i-solid-path-1"
                  />
                  <path
                    fill="currentColor"
                    d="M16.44 31.82a2.15 2.15 0 0 1-.38-2.55l.53-1l-1.09-.33a2.14 2.14 0 0 1-1.5-2.1v-2.05a2.16 2.16 0 0 1 1.53-2.07l1.09-.33l-.52-1a2.17 2.17 0 0 1 .35-2.52a18.92 18.92 0 0 0-2.32-.16A15.58 15.58 0 0 0 2 23.07v7.75a1 1 0 0 0 1 1h13.44Z"
                    class="clr-i-solid clr-i-solid-path-2"
                  />
                  <path
                    fill="currentColor"
                    d="m33.7 23.46l-2-.6a6.73 6.73 0 0 0-.58-1.42l1-1.86a.35.35 0 0 0-.07-.43l-1.45-1.46a.38.38 0 0 0-.43-.07l-1.85 1a7.74 7.74 0 0 0-1.43-.6l-.61-2a.38.38 0 0 0-.36-.25h-2.08a.38.38 0 0 0-.35.26l-.6 2a6.85 6.85 0 0 0-1.45.61l-1.81-1a.38.38 0 0 0-.44.06l-1.47 1.44a.37.37 0 0 0-.07.44l1 1.82a7.24 7.24 0 0 0-.65 1.43l-2 .61a.36.36 0 0 0-.26.35v2.05a.36.36 0 0 0 .26.35l2 .61a7.29 7.29 0 0 0 .6 1.41l-1 1.9a.37.37 0 0 0 .07.44L19.16 32a.38.38 0 0 0 .44.06l1.87-1a7.09 7.09 0 0 0 1.4.57l.6 2.05a.38.38 0 0 0 .36.26h2.05a.38.38 0 0 0 .35-.26l.6-2.05a6.68 6.68 0 0 0 1.38-.57l1.89 1a.38.38 0 0 0 .44-.06L32 30.55a.38.38 0 0 0 .06-.44l-1-1.88a6.92 6.92 0 0 0 .57-1.38l2-.61a.39.39 0 0 0 .27-.35v-2.07a.4.4 0 0 0-.2-.36Zm-8.83 4.72a3.34 3.34 0 1 1 3.33-3.34a3.34 3.34 0 0 1-3.33 3.34Z"
                    class="clr-i-solid clr-i-solid-path-3"
                  />
                  <path fill="none" d="M0 0h36v36H0z" />
                </svg>
              </div>
            </div>
          )}
        </div>
        <div className="col text-center fw-semibold fs-5 p-2">
          {env.user.nama}
          <p class="fs-6 fw-light">{env.user.role}</p>
        </div>
        <div className="col px-4">
          {pasien && (
            <div
              onClick={RiwayatPasienUrl}
              className={activeItem("/pasien/riwayatpasien")}
            >
              <div className="col-1 h-100">
                <img
                  src="/assets/img/Icon Medical Record.svg"
                  class="box-icon"
                />
              </div>
              <div className="col h-100">Medical Record</div>
            </div>
          )}

          {dokter && (
            <div
              onClick={pasienAkses}
              className={activeItem("/dokter/beriakses/all")}
            >
              <div className="col-1 h-100">
                <img
                  src="/assets/img/Icon Medical Record.svg"
                  class="box-icon"
                />
              </div>
              <div className="col h-100">Medical Record</div>
            </div>
          )}

          {pasien && (
            <div
              onClick={beriAkses}
              className={activeItem("/pasien/beriakses/all")}
            >
              <div className="col-1 h-100">
                <img src="/assets/img/import.svg" class="box-icon" />
              </div>
              <div className="col h-100">Beri Akses</div>
            </div>
          )}

          {admin && (
            <div
              onClick={Verifikasi}
              className={activeItem("/admin/verifikasi")}
            >
              <div className="col-1 h-100">
                <img
                  src="/assets/img/Icon Medical Record.svg"
                  class="box-icon"
                />
              </div>
              <div className="col h-100">Verifikasi</div>
            </div>
          )}

          <div onClick={logout} className="row mb-3 w-100 h-100 py-2 gx-9">
            <div className="col-1 h-100">
              <img src="/assets/img/Vector.svg" class="box-icon" />
            </div>
            <div className="col h-100">Sign Out</div>
          </div>
        </div>
      </div>
      <div className="col overflow-auto overflow-y-scroll vh-100">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
