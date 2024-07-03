import Link from "next/link";
import { useRouter } from "next/router";
export default function LayoutAuth({ children }) {
  const router = useRouter();
  const currentUrl = router.pathname;
  const cekUrl = (data) => {
    return currentUrl == data;
  };
  return (
    <div class="vh-100 w-100 bg-white">
      <div class="row h-100 w-100">
        <div class="col vh-100 w-100 overflow-hidden">
          {cekUrl("/auth") && (
            <img src="/assets/img/select_login.png" class="w-100" />
          )}
          {cekUrl("/auth/dokter") && (
            <img src="/assets/img/login-step-dokter.svg" class="w-100" />
          )}
          {cekUrl("/auth/daftardokter") && (
            <img src="/assets/img/login-step-dokter.svg" class="w-100" />
          )}
          {cekUrl("/auth/pasien") && (
            <img src="/assets/img/login-step-pasien.svg" class="w-100" />
          )}
          {cekUrl("/auth/daftarpasien") && (
            <img src="/assets/img/login-step-pasien.svg" class="w-100" />
          )}
          {cekUrl("/auth/admin") && (
            <img src="/assets/img/login-step-admin.svg" class="w-100" />
          )}
        </div>
        <div class="col vh-100 w-100">
          <div class="col w-100 justify-content-md-center h-100">
            <div class="row h-100 align-items-center">
              <div class="row"></div>
              <div class="row"></div>
              <div class="row"></div>
              <div class="row vh-100 overflow-auto overflow-x-auto align-items-center">
                <div className="col">{children}</div>
              </div>
              <div class="row"></div>
              <div class="row"></div>
              <div class="row"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
