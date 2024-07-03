import MainLayout from "@/layout/main";
import { env } from "@/next.config";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function riwayat_pasien() {
  const route = useRouter();
  const findById = (data) => {
    route.push(`/pasien/data/${data}`);
  };
  const [data_medis, set_data_medis] = useState([]);
  const get_data_medis = () => {
    axios({
      url: `${env.url}/medical-record/data/medical`,
      method: "get",
      headers: {
        Authorization: env.token,
      },
      data: {
        id: env.user.id,
      },
    }).then((res) => {
      set_data_medis(res.data.data);
    });
  };
  useEffect(() => {
    if (!env.user?.id) {
      route.push("/");
    }
    if (!data_medis.length) {
      get_data_medis();
    }
  }, []);
  return (
    <MainLayout>
      <div className="row">
        <div className="col fs-4 fw-bold">Riwayat Pemeriksaaan</div>
        <div className="row">
          <div className="col">
            <table class="table table-light table-sm">
              <thead>
                <tr class="table-light fw-bold">
                  <td class="table-light">No</td>
                  <td>Tanggal</td>
                  <td>Tujuan</td>
                  <td>No. Rekam Medis</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {data_medis.map((item, index) => {
                  return (
                    <tr class="table-light">
                      <td class="table-light">{index + 1}</td>
                      <td>{item.tgl_pemeriksaan}</td>
                      <td>{item.tujuan_pemeriksaan}</td>
                      <td>{item.no_rekam_medis}</td>
                      <td>
                        <button
                          onClick={() => findById(item.id)}
                          type="button"
                          class="btn btn-warning btn-sm"
                        >
                          lihat
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
