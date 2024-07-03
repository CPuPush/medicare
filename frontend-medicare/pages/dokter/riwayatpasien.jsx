import MainLayout from "@/layout/main";
import { useRouter } from "next/router";

export default function riwayat_pasien() {
    const router =  useRouter()
    const findById = (data) => {
        router.push(`/dokter/pasien/${data}`)
    }
    return (
        <MainLayout>
            <div className="row overflow-x-hidden">
                <div className="col fs-4 fw-bold">Pasien Memberikan Akses</div>
                <div className="row overflow-x-hidden">
                    <div className="col overflow-x-hidden">
                    <table class="table table-light table-sm">
                            <thead>
                                <tr class="table-light fw-bold">
                                    <td class="table-light">No</td>
                                    <td>Nama Pasien</td>
                                    <td>Jenis Kelamin</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="table-light">
                                    <td class="table-light">1</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>
                                        <button onClick={() => findById(1)} type="button" class="btn btn-warning btn-sm">Warning</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}