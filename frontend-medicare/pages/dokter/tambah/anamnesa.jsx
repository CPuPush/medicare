import MainLayout from "@/layout/main";
import { env } from "@/next.config";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function riwayat() {
  const router = useRouter();
  const [form, set_form] = useState({
    riwayat_penyakit_dahulu: "",
    riwayat_penyakit_keluarga: "",
    riwayat_kecelakaan: "",
    riwayat_perawatan_rumah_sakit: "",
    riwayat_operasi: "",
    merokok: "",
    minum_alkohol: "",
    olahraga: "",
  });
  const input_riwayat_penyakit_dahulu = (e) => {
    set_form({ ...form, riwayat_penyakit_dahulu: e.target.value });
  };
  const input_riwayat_penyakit_keluarga = (e) => {
    set_form({ ...form, riwayat_penyakit_keluarga: e.target.value });
  };
  const input_riwayat_kecelakaan = (e) => {
    set_form({ ...form, riwayat_kecelakaan: e.target.value });
  };
  const input_riwayat_perawatan_rumah_sakit = (e) => {
    set_form({ ...form, riwayat_perawatan_rumah_sakit: e.target.value });
  };
  const input_riwayat_operasi = (e) => {
    set_form({ ...form, riwayat_operasi: e.target.value });
  };
  const input_merokok = (e) => {
    set_form({ ...form, merokok: e.target.value });
  };
  const input_minum_alkohol = (e) => {
    set_form({ ...form, minum_alkohol: e.target.value });
  };
  const input_olahraga = (e) => {
    set_form({ ...form, olahraga: e.target.value });
  };
  const next = () => {
    axios({
      url: `${env.url}/medical-record/anamnesa/${env.no_rekam_medis}`,
      method: "post",
      headers: {
        Authorization: env.token,
      },
      data: form,
    });
    router.push("/dokter/tambah/pemeriksaanfisik");
  };
  return (
    <MainLayout>
      <div className="row">
        <div className="col fw-bold fs-5">Anamnesa</div>
        <div className="row mt-4 bg-white p-4">
          <div className="col-3 fw-bold">Riwayat Kesehatan</div>
          <div className="col">
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Riwayat Penyakit Dahulu
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={form.riwayat_penyakit_dahulu}
                  onChange={input_riwayat_penyakit_dahulu}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Riwayat Penyakit Keluarga
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={form.riwayat_penyakit_keluarga}
                  onChange={input_riwayat_penyakit_keluarga}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Riwayat Kecelakaan
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={form.riwayat_kecelakaan}
                  onChange={input_riwayat_kecelakaan}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Riwayat Perawatan Rumah Sakit
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={form.riwayat_perawatan_rumah_sakit}
                  onChange={input_riwayat_perawatan_rumah_sakit}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Riwayat Operasi
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={form.riwayat_operasi}
                  onChange={input_riwayat_operasi}
                />
              </div>
            </div>
          </div>
          <div className="col-12"></div>
          <div className="col-3 fw-bold">Kebiasaan</div>
          <div className="col">
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Merokok
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={form.merokok}
                  onChange={input_merokok}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Minum Alkohol
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={form.minum_alkohol}
                  onChange={input_minum_alkohol}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Olahraga
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={form.olahraga}
                  onChange={input_olahraga}
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-end p-4">
            <button onClick={() => next()} class="col-2 btn btn-success">
              Selanjutnya
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
