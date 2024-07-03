import MainLayout from "@/layout/main";
import { env } from "@/next.config";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function riwayat() {
    const router = useRouter()
    const [form, set_form] = useState({
        jantung: '',
        paru: '',
        ekg: '',
    })
    const input_jantung = (e) => {
        set_form({ ...form, jantung: e.target.value })
    }
    const input_paru = (e) => {
        set_form({ ...form, paru: e.target.value })
    }
    const input_ekg = (e) => {
        set_form({ ...form, ekg: e.target.value })
    }
    const next = () => {
        axios({
            url: `${env.url}/medical-record/pemeriksaan-lainnya/${env.no_rekam_medis}`,
            method: "post",
            headers: {
                Authorization: env.token
            },
            data: form
        }).then(() => {
            router.push('/dokter/tambah/kesimpulan');
        })
    }
    return (
        <MainLayout>
            <div className="row">
                <div className="col fw-bold fs-5">Pemeriksaan Lainnya</div>
                <div className="row mt-4 bg-white p-4">
                    <div className="col">
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col col-form-label">Jantung</label>
                            <div class="col-8">
                                <input type="text" class="form-control" id="inputPassword" value={form.jantung} onChange={input_jantung} />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col col-form-label">Paru-Paru</label>
                            <div class="col-8">
                                <input type="text" class="form-control" id="inputPassword" value={form.paru} onChange={input_paru} />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col col-form-label">EKG</label>
                            <div class="col-8">
                                <input type="text" class="form-control" id="inputPassword" value={form.ekg} onChange={input_ekg} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12"></div>
                    <div className="row justify-content-end p-4">
                        <button onClick={() => next()} class="col-2 btn btn-success">Selanjutnya</button>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}