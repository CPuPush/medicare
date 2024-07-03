import MainLayout from "@/layout/main";
import { env } from "@/next.config";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function riwayat_pasien() {
    const router = useRouter()
    const findPasien = (data) => {
        const pasien = {
            id : data.id,
            nama : data.nama,
            jenis_kelamin : data.jenis_kelamin,
            alamat : data.alamat,
        }
        env.data_pasien = pasien
        router.push(`/dokter/pasien/${data.id}`)
    }
    const [data_pasien, set_data_pasien] = useState([])
    const get_data_pasien = () => {
        axios({
            url: `${env.url}/user/dokter/pasienAuth`,
            method: 'get',
            headers: {
                Authorization: `${env.token}`
            },
            data: {
                id: env.user.id
            }
        }).then((res) => {
            set_data_pasien(res.data.data)
        })
    }

    useEffect(() => {
        if (!env.user?.id) {
            router.push('/')
        }
        if (!data_pasien.length) {
            get_data_pasien()
        }
    },[])
    return (
        <MainLayout>
            <div className="row">
                <div className="col fs-4 fw-bold">Pasien Yang Memberikan Akses</div>
                <div className="row">
                    <div className="col">
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
                                {data_pasien.map(
                                    (item, index) => {
                                        return (
                                            <tr class="table-light" key={index}>
                                                <td class="table-light">{index + 1}</td>
                                                <td>{item.pasien.nama}</td>
                                                <td>{item.pasien.jenis_kelamin}</td>
                                                <td>
                                                    <button onClick={() => findPasien(item.pasien)} type="button" class="btn btn-warning btn-sm">Lihat</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}