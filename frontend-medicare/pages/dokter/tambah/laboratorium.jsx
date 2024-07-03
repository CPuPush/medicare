import MainLayout from "@/layout/main";
import { env } from "@/next.config";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function riwayat() {
  const router = useRouter();
  const [form, set_form] = useState({
    hb: null,
    leukosit: null,
    led: null,
    eritrosit: null,
    hematrokit: null,
    trombosit: null,
    golongan_darah: "",
    mcv: null,
    mch: null,
    mchc: null,
    basofil: null,
    eosinofil: null,
    n_batang: null,
    n_segmen: null,
    limfosit: null,
    monosit: null,
    gula_darah_puasa: null,
    total_kolesterol: null,
    hdl: null,
    ldl: null,
    trigliserida: null,
    ureum_darah: null,
    kreatinin_darah: null,
    asam_urat: null,
    sgot: null,
    sgpt: null,
    warna: "",
    kekeruhan: "",
    berat_jenis: null,
    ph: null,
    leukosit_urine: "",
    eritrosit_urine: "",
    silinder: "",
    kristal: "",
    epitel: "",
    protein: "",
    glukosa: "",
    bilirubin: "",
    urobilin: "",
    benda_keton: "",
  });

  const input_hb = (e) => {
    set_form({ ...form, hb: parseInt(e.target.value) });
  };
  const input_leukosit = (e) => {
    set_form({ ...form, leukosit: parseInt(e.target.value) });
  };
  const input_led = (e) => {
    set_form({ ...form, led: parseInt(e.target.value) });
  };
  const input_eritrosit = (e) => {
    set_form({ ...form, eritrosit: parseInt(e.target.value) });
  };
  const input_hematrokit = (e) => {
    set_form({ ...form, hematrokit: parseInt(e.target.value) });
  };
  const input_trombosit = (e) => {
    set_form({ ...form, trombosit: parseInt(e.target.value) });
  };
  const input_golongan_darah = (e) => {
    set_form({ ...form, golongan_darah: e.target.value });
  };
  const input_mcv = (e) => {
    set_form({ ...form, mcv: parseInt(e.target.value) });
  };
  const input_mch = (e) => {
    set_form({ ...form, mch: parseInt(e.target.value) });
  };
  const input_mchc = (e) => {
    set_form({ ...form, mchc: parseInt(e.target.value) });
  };
  const input_basofil = (e) => {
    set_form({ ...form, basofil: parseInt(e.target.value) });
  };
  const input_eosinofil = (e) => {
    set_form({ ...form, eosinofil: parseInt(e.target.value) });
  };
  const input_n_batang = (e) => {
    set_form({ ...form, n_batang: parseInt(e.target.value) });
  };
  const input_n_segmen = (e) => {
    set_form({ ...form, n_segmen: parseInt(e.target.value) });
  };
  const input_limfosit = (e) => {
    set_form({ ...form, limfosit: parseInt(e.target.value) });
  };
  const input_monosit = (e) => {
    set_form({ ...form, monosit: parseInt(e.target.value) });
  };
  const input_gula_darah_puasa = (e) => {
    set_form({ ...form, gula_darah_puasa: parseInt(e.target.value) });
  };
  const input_total_kolesterol = (e) => {
    set_form({ ...form, total_kolesterol: parseInt(e.target.value) });
  };
  const input_hdl = (e) => {
    set_form({ ...form, hdl: parseInt(e.target.value) });
  };
  const input_ldl = (e) => {
    set_form({ ...form, ldl: parseInt(e.target.value) });
  };
  const input_trigliserida = (e) => {
    set_form({ ...form, trigliserida: parseInt(e.target.value) });
  };
  const input_ureum_darah = (e) => {
    set_form({ ...form, ureum_darah: parseInt(e.target.value) });
  };
  const input_kreatinin_darah = (e) => {
    set_form({ ...form, kreatinin_darah: parseInt(e.target.value) });
  };
  const input_asam_urat = (e) => {
    set_form({ ...form, asam_urat: parseInt(e.target.value) });
  };
  const input_sgot = (e) => {
    set_form({ ...form, sgot: parseInt(e.target.value) });
  };
  const input_sgpt = (e) => {
    set_form({ ...form, sgpt: parseInt(e.target.value) });
  };
  const input_warna = (e) => {
    set_form({ ...form, warna: e.target.value });
  };
  const input_kekeruhan = (e) => {
    set_form({ ...form, kekeruhan: e.target.value });
  };
  const input_berat_jenis = (e) => {
    set_form({ ...form, berat_jenis: parseInt(e.target.value) });
  };
  const input_ph = (e) => {
    set_form({ ...form, ph: parseInt(e.target.value) });
  };
  const input_leukosit_urine = (e) => {
    set_form({ ...form, leukosit_urine: e.target.value });
  };
  const input_eritrosit_urine = (e) => {
    set_form({ ...form, eritrosit_urine: e.target.value });
  };
  const input_silinder = (e) => {
    set_form({ ...form, silinder: e.target.value });
  };
  const input_kristal = (e) => {
    set_form({ ...form, kristal: e.target.value });
  };
  const input_epitel = (e) => {
    set_form({ ...form, epitel: e.target.value });
  };
  const input_protein = (e) => {
    set_form({ ...form, protein: e.target.value });
  };
  const input_glukosa = (e) => {
    set_form({ ...form, glukosa: e.target.value });
  };
  const input_bilirubin = (e) => {
    set_form({ ...form, bilirubin: e.target.value });
  };
  const input_urobilin = (e) => {
    set_form({ ...form, urobilin: e.target.value });
  };
  const input_benda_keton = (e) => {
    set_form({ ...form, benda_keton: e.target.value });
  };

  const next = () => {
    axios({
      url: `${env.url}/medical-record/laboratorium/${env.no_rekam_medis}`,
      method: "post",
      headers: {
        Authorization: env.token,
      },
      data: form,
    });
    router.push("/dokter/tambah/lainnya");
  };
  return (
    <MainLayout>
      <div className="row">
        <div className="col fw-bold fs-5">Laboratorium</div>
        <div className="row mt-4 bg-white p-4">
          <div className="col-3 fw-bold">Hematologi</div>
          <div className="col">
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Hb
              </label>
              <div class="col-8">
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword"
                  value={form.hb}
                  onChange={input_hb}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Leukosit
              </label>
              <div class="col-8">
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword"
                  value={form.leukosit}
                  onChange={input_leukosit}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                LED
              </label>
              <div class="col-8">
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword"
                  value={form.led}
                  onChange={input_led}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Eritrosit
              </label>
              <div class="col-8">
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword"
                  value={form.eritrosit}
                  onChange={input_eritrosit}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Hematokrit
              </label>
              <div class="col-8">
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword"
                  value={form.hematrokit}
                  onChange={input_hematrokit}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Trombosit
              </label>
              <div class="col-8">
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword"
                  value={form.trombosit}
                  onChange={input_trombosit}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Gologan Darah
              </label>
              <div class="col-8">
                <select
                  className="form-control"
                  id="inputPassword"
                  value={form.golongan_darah}
                  onChange={input_golongan_darah}
                >
                  <option value="">Pilih Golongan Darah</option>
                  <option value="A">A</option>
                  <option value="AB">AB</option>
                  <option value="B">B</option>
                  <option value="O">O</option>
                  <option value="A+">A+</option>
                  <option value="AB+">AB+</option>
                  <option value="B+">B+</option>
                  <option value="O+">O+</option>
                  <option value="A-">A-</option>
                  <option value="AB-">AB-</option>
                  <option value="B-">B-</option>
                  <option value="O-">O-</option>
                </select>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                MCV
              </label>
              <div class="col-8">
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword"
                  value={form.mcv}
                  onChange={input_mcv}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                MCH
              </label>
              <div class="col-8">
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword"
                  value={form.mch}
                  onChange={input_mch}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                MCHC
              </label>
              <div class="col-8">
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword"
                  value={form.mchc}
                  onChange={input_mchc}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label fw-bold">
                Hitung Jenis
              </label>
              <div class="mb-3 row">
                <label for="inputPassword" class="col col-form-label">
                  Basofil
                </label>
                <div class="col-8">
                  <input
                    type="number"
                    class="form-control"
                    id="inputPassword"
                    value={form.basofil}
                    onChange={input_basofil}
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="inputPassword" class="col col-form-label">
                  Eosinofil
                </label>
                <div class="col-8">
                  <input
                    type="number"
                    class="form-control"
                    id="inputPassword"
                    value={form.eosinofil}
                    onChange={input_eosinofil}
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="inputPassword" class="col col-form-label">
                  N.Batang
                </label>
                <div class="col-8">
                  <input
                    type="number"
                    class="form-control"
                    id="inputPassword"
                    value={form.n_batang}
                    onChange={input_n_batang}
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="inputPassword" class="col col-form-label">
                  N.Segmen
                </label>
                <div class="col-8">
                  <input
                    type="number"
                    class="form-control"
                    id="inputPassword"
                    value={form.n_segmen}
                    onChange={input_n_segmen}
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="inputPassword" class="col col-form-label">
                  Limfosit
                </label>
                <div class="col-8">
                  <input
                    type="number"
                    class="form-control"
                    id="inputPassword"
                    value={form.limfosit}
                    onChange={input_limfosit}
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="inputPassword" class="col col-form-label">
                  Monosit
                </label>
                <div class="col-8">
                  <input
                    type="number"
                    class="form-control"
                    id="inputPassword"
                    value={form.monosit}
                    onChange={input_monosit}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12"></div>
          <div className="col-3 fw-bold">Kimia Klinik</div>
          <div className="col">
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Gula Darah
              </label>
              <div class="col-8">
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword"
                  value={form.gula_darah_puasa}
                  onChange={input_gula_darah_puasa}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Total Kolesterol
              </label>
              <div class="col-8">
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword"
                  value={form.total_kolesterol}
                  onChange={input_total_kolesterol}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                HDL
              </label>
              <div class="col-8">
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword"
                  value={form.hdl}
                  onChange={input_hdl}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                LDL
              </label>
              <div class="col-8">
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword"
                  value={form.ldl}
                  onChange={input_ldl}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Trigliserida
              </label>
              <div class="col-8">
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword"
                  value={form.trigliserida}
                  onChange={input_trigliserida}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Ureum Darah
              </label>
              <div class="col-8">
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword"
                  value={form.ureum_darah}
                  onChange={input_ureum_darah}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Kreatinin Darah
              </label>
              <div class="col-8">
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword"
                  value={form.kreatinin_darah}
                  onChange={input_kreatinin_darah}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Asam Urat
              </label>
              <div class="col-8">
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword"
                  value={form.asam_urat}
                  onChange={input_asam_urat}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                SGOT
              </label>
              <div class="col-8">
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword"
                  value={form.sgot}
                  onChange={input_sgot}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                SGPT
              </label>
              <div class="col-8">
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword"
                  value={form.sgpt}
                  onChange={input_sgpt}
                />
              </div>
            </div>
          </div>
          <div className="col-12"></div>
          <div className="col-3 fw-bold">Urinalisis</div>
          <div className="col">
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label fw-bold">
                Makroskopis
              </label>
              <div class="mb-3 row">
                <label for="inputPassword" class="col col-form-label">
                  Warna
                </label>
                <div class="col-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword"
                    value={form.warna}
                    onChange={input_warna}
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="inputPassword" class="col col-form-label">
                  Kekeruhan
                </label>
                <div class="col-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword"
                    value={form.kekeruhan}
                    onChange={input_kekeruhan}
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="inputPassword" class="col col-form-label">
                  Berat Jenis
                </label>
                <div class="col-8">
                  <input
                    type="number"
                    class="form-control"
                    id="inputPassword"
                    value={form.berat_jenis}
                    onChange={input_berat_jenis}
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="inputPassword" class="col col-form-label">
                  pH
                </label>
                <div class="col-8">
                  <input
                    type="number"
                    class="form-control"
                    id="inputPassword"
                    value={form.ph}
                    onChange={input_ph}
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="inputPassword" class="col col-form-label">
                  Leukosit
                </label>
                <div class="col-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword"
                    value={form.leukosit_urine}
                    onChange={input_leukosit_urine}
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="inputPassword" class="col col-form-label">
                  Eritrosit
                </label>
                <div class="col-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword"
                    value={form.eritrosit_urine}
                    onChange={input_eritrosit_urine}
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="inputPassword" class="col col-form-label">
                  Silinder
                </label>
                <div class="col-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword"
                    value={form.silinder}
                    onChange={input_silinder}
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="inputPassword" class="col col-form-label">
                  Kristal
                </label>
                <div class="col-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword"
                    value={form.kristal}
                    onChange={input_kristal}
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="inputPassword" class="col col-form-label">
                  Epitel
                </label>
                <div class="col-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword"
                    value={form.epitel}
                    onChange={input_epitel}
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div class="mb-3 row">
                <label for="inputPassword" class="col col-form-label fw-bold">
                  Kimia
                </label>
                <div class="mb-3 row">
                  <label for="inputPassword" class="col col-form-label">
                    Protein
                  </label>
                  <div class="col-8">
                    <input
                      type="text"
                      class="form-control"
                      id="inputPassword"
                      value={form.protein}
                      onChange={input_protein}
                    />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="inputPassword" class="col col-form-label">
                    Glukosa
                  </label>
                  <div class="col-8">
                    <input
                      type="text"
                      class="form-control"
                      id="inputPassword"
                      value={form.glukosa}
                      onChange={input_glukosa}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Bilirubin
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={form.bilirubin}
                  onChange={input_bilirubin}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Urobilin
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={form.urobilin}
                  onChange={input_urobilin}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col col-form-label">
                Benda Keton
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={form.benda_keton}
                  onChange={input_benda_keton}
                />
              </div>
            </div>
          </div>
          <div className="col-12"></div>
          <div className="col"></div>
          <div className="col-12"></div>

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
