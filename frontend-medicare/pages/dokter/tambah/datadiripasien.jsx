import MainLayout from "@/layout/main";
import { env } from "@/next.config";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function riwayat() {
  const router = useRouter();
  const [form, set_form] = useState({
    nama: "",
    jenis_kelamin: "",
    tanggal_lahir: "",
    umur: null,
    alamat: "",
    no_rekam_medis: null,
    tgl_pemeriksaan: "",
    tujuan_pemeriksaan: "",
  });
  const input_nama = (e) => {
    set_form({ ...form, nama: e.target.value });
  };
  const input_jenis_kelamin = (e) => {
    set_form({ ...form, jenis_kelamin: e.target.value });
  };
  const input_tanggal_lahir = (e) => {
    set_form({ ...form, tanggal_lahir: e.target.value });
  };
  const input_umur = (e) => {
    set_form({ ...form, umur: parseInt(e.target.value) });
  };
  const input_alamat = (e) => {
    set_form({ ...form, alamat: e.target.value });
  };
  const input_no_rekam_medis = (e) => {
    set_form({ ...form, no_rekam_medis: parseInt(e.target.value) });
  };
  const input_tgl_pemeriksaan = (e) => {
    set_form({ ...form, tgl_pemeriksaan: e.target.value });
  };
  const input_tujuan_pemeriksaan = (e) => {
    set_form({ ...form, tujuan_pemeriksaan: e.target.value });
  };
  const next = () => {
    axios({
      url: `${env.url}/medical-record/data/${env.data_pasien.id}`,
      method: "post",
      headers: {
        Authorization: env.token,
      },
      data: form,
    }).then((res) => {
      env.no_rekam_medis = res.data.data.id;
      router.push("/dokter/tambah/anamnesa");
    });
  };
  useEffect(() => {
    if (!env.data_pasien?.id) {
      router.push("/");
    }
  });
  return (
    <MainLayout>
      <div className="row">
        <div className="col fw-bold fs-5">Data Diri Pasien</div>
        <div className="mt-4 bg-white p-4">
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Nama Pasien
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputPassword"
                value={form.nama}
                onChange={input_nama}
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Jenis Kelamin
            </label>
            <div className="col-sm-10">
              <select
                className="form-control"
                id="inputPassword"
                value={form.jenis_kelamin}
                onChange={input_jenis_kelamin}
              >
                <option value="">Pilih Jenis Kelamin</option>
                <option value="laki-laki">Laki-laki</option>
                <option value="perempuan">Perempuan</option>
              </select>
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Tanggal Lahir
            </label>
            <div class="col-sm-10">
              <input
                type="date"
                class="form-control"
                id="inputPassword"
                value={form.tanggal_lahir}
                onChange={input_tanggal_lahir}
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              No. Rekam Medis
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputPassword"
                value={form.no_rekam_medis}
                onChange={input_no_rekam_medis}
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Tanggal Pemeriksaan
            </label>
            <div class="col-sm-10">
              <input
                type="date"
                class="form-control"
                id="inputPassword"
                value={form.tgl_pemeriksaan}
                onChange={input_tgl_pemeriksaan}
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Tujuan Pemeriksaan
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputPassword"
                value={form.tujuan_pemeriksaan}
                onChange={input_tujuan_pemeriksaan}
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Umur
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputPassword"
                value={form.umur}
                onChange={input_umur}
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Alamat
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputPassword"
                value={form.alamat}
                onChange={input_alamat}
              />
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
