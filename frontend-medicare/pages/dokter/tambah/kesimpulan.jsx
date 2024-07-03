import MainLayout from "@/layout/main";
import { env } from "@/next.config";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function riwayat() {
    const router = useRouter()
    const [form, set_form] = useState({
        kesimpulan: '',
        anjuran: '',
    })
    const input_kesimpulan = (e) => {
        set_form({ ...form, kesimpulan: e.target.value })
    }
    const input_anjuran = (e) => {
        set_form({ ...form, anjuran: e.target.value })
    }
    const next = () => {
        axios({
            url: `${env.url}/medical-record/kesimpulan/${env.no_rekam_medis}`,
            method: "post",
            headers: {
                Authorization: env.token
            },
            data: form
        }).then(() => {
            router.push(`/dokter/pasien/${env.data_pasien.id}`);
        })
    }
    return (
        <MainLayout>
            <div className="row">
                <div className="col fw-bold fs-5">Pemeriksaan Lainnya</div>
                <div className="row mt-4 bg-white p-4">
                <div className="col">
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col col-form-label">Kesimpulan</label>
                            <div class="col-8">
                                <input type="text" class="form-control" id="inputPassword" value={form.kesimpulan} onChange={input_kesimpulan} />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col col-form-label">Anjuran</label>
                            <div class="col-8">
                                <input type="text" class="form-control" id="inputPassword" value={form.anjuran} onChange={input_anjuran} />
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