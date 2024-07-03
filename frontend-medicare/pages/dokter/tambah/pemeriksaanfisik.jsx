import MainLayout from "@/layout/main";
import { env } from "@/next.config";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function riwayat() {
  const router = useRouter();
  const [form, set_form] = useState({
    tinggi_badan: null,
    berat_badan: null,
    indeks_masa_tubuh: null,
    kulit: "",
    sistem_limfa: "",
    thyroid: "",
    denyut_nadi: null,
    karakter: "",
    vena: "",
    oedema: "",
    tekanan_darah: "",
    detak_jantung: "",
    mur_mur_jantung: "",
    frekuensi_nafas: null,
    trachea: "",
    inspeksi: "",
    palpasi: "",
    auskultasi: "",
    perkusi: "",
    mulut: "",
    hati: "",
    limpa: "",
    massa: "",
    colok_dubur: "",
    ginjal: "",
    saraf_cranial: "",
    sistem_motorik: "",
    sistem_sensorik: "",
    refleks: "",
  });

  const input_tinggi_badan = (e) => {
    set_form({ ...form, tinggi_badan: parseInt(e.target.value) });
  };
  const input_berat_badan = (e) => {
    set_form({ ...form, berat_badan: parseInt(e.target.value) });
  };
  const input_indeks_masa_tubuh = (e) => {
    set_form({ ...form, indeks_masa_tubuh: parseInt(e.target.value) });
  };
  const input_kulit = (e) => {
    set_form({ ...form, kulit: e.target.value });
  };
  const input_sistem_limfa = (e) => {
    set_form({ ...form, sistem_limfa: e.target.value });
  };
  const input_thyroid = (e) => {
    set_form({ ...form, thyroid: e.target.value });
  };
  const input_denyut_nadi = (e) => {
    set_form({ ...form, denyut_nadi: parseInt(e.target.value) });
  };
  const input_karakter = (e) => {
    set_form({ ...form, karakter: e.target.value });
  };
  const input_vena = (e) => {
    set_form({ ...form, vena: e.target.value });
  };
  const input_oedema = (e) => {
    set_form({ ...form, oedema: e.target.value });
  };
  const input_tekanan_darah = (e) => {
    set_form({ ...form, tekanan_darah: e.target.value });
  };
  const input_detak_jantung = (e) => {
    set_form({ ...form, detak_jantung: e.target.value });
  };
  const input_mur_mur_jantung = (e) => {
    set_form({ ...form, mur_mur_jantung: e.target.value });
  };
  const input_frekuensi_nafas = (e) => {
    set_form({ ...form, frekuensi_nafas: parseInt(e.target.value) });
  };
  const input_trachea = (e) => {
    set_form({ ...form, trachea: e.target.value });
  };
  const input_inspeksi = (e) => {
    set_form({ ...form, inspeksi: e.target.value });
  };
  const input_palpasi = (e) => {
    set_form({ ...form, palpasi: e.target.value });
  };
  const input_auskultasi = (e) => {
    set_form({ ...form, auskultasi: e.target.value });
  };
  const input_perkusi = (e) => {
    set_form({ ...form, perkusi: e.target.value });
  };
  const input_mulut = (e) => {
    set_form({ ...form, mulut: e.target.value });
  };
  const input_hati = (e) => {
    set_form({ ...form, hati: e.target.value });
  };
  const input_limpa = (e) => {
    set_form({ ...form, limpa: e.target.value });
  };
  const input_massa = (e) => {
    set_form({ ...form, massa: e.target.value });
  };
  const input_colok_dubur = (e) => {
    set_form({ ...form, colok_dubur: e.target.value });
  };
  const input_ginjal = (e) => {
    set_form({ ...form, ginjal: e.target.value });
  };
  const input_saraf_cranial = (e) => {
    set_form({ ...form, saraf_cranial: e.target.value });
  };
  const input_sistem_motorik = (e) => {
    set_form({ ...form, sistem_motorik: e.target.value });
  };
  const input_sistem_sensorik = (e) => {
    set_form({ ...form, sistem_sensorik: e.target.value });
  };
  const input_refleks = (e) => {
    set_form({ ...form, refleks: e.target.value });
  };
  const next = () => {
    axios({
      url: `${env.url}/medical-record/pemeriksaan-fisik/${env.no_rekam_medis}`,
      method: "post",
      headers: {
        Authorization: env.token,
      },
      data: form,
    }).then(() => {
      router.push("/dokter/tambah/laboratorium");
    });
  };
  return (
    <MainLayout>
      <div className="row">
        <div className="col fw-bold fs-5">Pemeriksaan Fisik</div>
        <div className="row mt-4 bg-white p-4">
          <div className="col-3 fw-bold">Keadaan Umum</div>
          <div className="col">
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Tinggi Badan
              </label>
              <div class="col-8">
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword"
                  value={form.tinggi_badan}
                  onChange={input_tinggi_badan}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Berat Badan
              </label>
              <div class="col-8">
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword"
                  value={form.berat_badan}
                  onChange={input_berat_badan}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Indeks Massa Tubuh
              </label>
              <div class="col-8">
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword"
                  value={form.indeks_masa_tubuh}
                  onChange={input_indeks_masa_tubuh}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Kulit
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={form.kulit}
                  onChange={input_kulit}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Sistem Limfa
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={form.sistem_limfa}
                  onChange={input_sistem_limfa}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Thyroid
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={form.thyroid}
                  onChange={input_thyroid}
                />
              </div>
            </div>
          </div>
          <div className="col-12"></div>
          <div className="col-3 fw-bold">Sistem Kardiovaskular</div>
          <div className="col">
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Denyut Nadi
              </label>
              <div class="col-8">
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword"
                  value={form.denyut_nadi}
                  onChange={input_denyut_nadi}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Karakter
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={form.karakter}
                  onChange={input_karakter}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Vena
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={form.vena}
                  onChange={input_vena}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Oedema
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={form.oedema}
                  onChange={input_oedema}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Tekanan Darah
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={form.tekanan_darah}
                  onChange={input_tekanan_darah}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Detak Jantung
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={form.detak_jantung}
                  onChange={input_detak_jantung}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Mur-Mur Jantung
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={form.mur_mur_jantung}
                  onChange={input_mur_mur_jantung}
                />
              </div>
            </div>
          </div>
          <div className="col-12"></div>
          <div className="col-3 fw-bold">Sistem Pernafasan</div>
          <div className="col">
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Frequensi Nafas
              </label>
              <div class="col-8">
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword"
                  value={form.frekuensi_nafas}
                  onChange={input_frekuensi_nafas}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Trachea
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={form.trachea}
                  onChange={input_trachea}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Inspeksi
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={form.inspeksi}
                  onChange={input_inspeksi}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Palpasi
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={form.palpasi}
                  onChange={input_palpasi}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Auskultasi
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={form.auskultasi}
                  onChange={input_auskultasi}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Perkusi
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={form.perkusi}
                  onChange={input_perkusi}
                />
              </div>
            </div>
          </div>
          <div className="col-12"></div>
          <div className="col-3 fw-bold">Sistem Gastrointestinal</div>
          <div className="col">
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Mulut
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={form.mulut}
                  onChange={input_mulut}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Hati
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={form.hati}
                  onChange={input_hati}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Limpa
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={form.limpa}
                  onChange={input_limpa}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Massa
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={form.massa}
                  onChange={input_massa}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Colok Dubur
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={form.colok_dubur}
                  onChange={input_colok_dubur}
                />
              </div>
            </div>
          </div>
          <div className="col-12"></div>
          <div className="col-3 fw-bold">Genito Urinary System</div>
          <div className="col">
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Ginjal
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={form.ginjal}
                  onChange={input_ginjal}
                />
              </div>
            </div>
          </div>
          <div className="col-12"></div>
          <div className="col-3 fw-bold">Sistem Saraf Pusat</div>
          <div className="col">
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Saraf Cranial
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={form.saraf_cranial}
                  onChange={input_saraf_cranial}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Sistem Motorik
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={form.sistem_motorik}
                  onChange={input_sistem_motorik}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Sistem Sensorik
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={form.sistem_sensorik}
                  onChange={input_sistem_sensorik}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Refleks
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={form.refleks}
                  onChange={input_refleks}
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
