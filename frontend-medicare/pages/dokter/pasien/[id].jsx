import MainLayout from "@/layout/main";
import { env } from "@/next.config";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function main() {
  const router = useRouter();
  const { id } = router.query;
  const dataPasien = (id) => {
    router.push(`/dokter/data/${id}`);
  };
  const tambahData = () => {
    router.push(`/dokter/tambah/datadiripasien`);
  };
  const [data_pasien, set_data_pasien] = useState([]);
  const get_data_medis = () => {
    axios({
      url: `${env.url}/medical-record/data/medical/${id}`,
      method: "get",
      headers: {
        Authorization: env.token,
      },
      data: {
        id: id,
      },
    }).then((res) => {
      set_data_pasien(res.data.data);
    });
  };
  useEffect(() => {
    if (!env.user.id) {
      router.push("/");
    }
    if (!data_pasien.length) {
      get_data_medis();
    }
  }, []);
  return (
    <MainLayout>
      <div className="row">
        <div className="col d-flex justify-content-end mb-2">
          <button onClick={() => tambahData()} class="btn btn-success">
            Tambah
          </button>
        </div>
        <div className="">
          <div className=" w-100 bg-white mb-4 p-3">
            <div className="mb-2 fw-bold fs-5">Data diri pasien</div>
            <div className="row">
              <label for="staticEmail" class="col-sm-2 col-form-label">
                Nama
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  disabled
                  readonly
                  class="form-control-plaintext"
                  value={env.data_pasien.nama}
                />
              </div>
            </div>
            <div className="row">
              <label for="staticEmail" class="col-sm-2 col-form-label">
                Tanggal Lahir
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  disabled
                  readonly
                  class="form-control-plaintext"
                  value={env.data_pasien.jenis_kelamin}
                />
              </div>
            </div>
            <div className="row">
              <label for="staticEmail" class="col-sm-2 col-form-label">
                Alamat
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  disabled
                  readonly
                  class="form-control-plaintext"
                  value={env.data_pasien.alamat}
                />
              </div>
            </div>
          </div>
          <div className="w-100 bg-white p-4">
            <table class="table table-light table-sm">
              <thead>
                <tr class="table-light fw-bold">
                  <td class="table-light">No</td>
                  <td>Nama Pasien</td>
                  <td>Tanggal Pemeriksaan</td>
                  <td>Tujuan Pemeriksaan</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {data_pasien.map((item, index) => {
                  return (
                    <tr class="table-light">
                      <td class="table-light">{index + 1}</td>
                      <td>{item.nama}</td>
                      <td>{item.tgl_pemeriksaan}</td>
                      <td>{item.tujuan_pemeriksaan}</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-warning btn-sm"
                          onClick={() => dataPasien(item.id)}
                        >
                          Lihat
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
