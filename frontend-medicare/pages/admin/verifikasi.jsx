import MainLayout from "@/layout/main";
import { env } from "@/next.config";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function verifikasi() {
  const array_dokter = [];
  const router = useRouter();
  const [data_dokter, set_data_dokter] = useState(array_dokter);
  const validasi = (id, status) => {
    axios({
      url: `${env.url}/user/admin/validation`,
      method: "post",
      headers: {
        Authorization: `${env.token}`,
      },
      data: {
        id: id,
        status: status,
      },
    }).then(() => {
      get_dokter();
    });
  };
  const delete_dokter = (id) => {
    axios({
      url: `${env.url}/user/admin/dokter`,
      method: "post",
      headers: {
        Authorization: `${env.token}`,
      },
      data: {
        id: id,
      },
    }).then(() => {
      get_dokter();
    });
  };
  const get_dokter = () => {
    axios({
      url: `${env.url}/user/dokter`,
      method: "post",
    }).then(
      (res) => {
        set_data_dokter(res.data.data);
      },
      (error) => {}
    );
  };
  useEffect(() => {
    if (!data_dokter.length) {
      get_dokter();
    }
    if (!env.user?.role) {
      router.push("/auth");
    }
  });
  return (
    <MainLayout>
      <div className="row">
        <div className="col fs-4 fw-bold">Verifikasi dokter</div>
        <div className="row">
          <div className="col">
            <table class="table table-light table-sm">
              <thead>
                <tr class="table-light fw-bold">
                  <td class="table-light">No</td>
                  <td>Nama Dokter</td>
                  <td>No.STR</td>
                  <td>Status</td>
                  <td>Aksi</td>
                </tr>
              </thead>
              <tbody>
                {data_dokter.map((item, index) => {
                  return (
                    <tr class="table-light" key={item.id}>
                      <td class="table-light">{index + 1}</td>
                      <td class="text-capitalize">{item.nama}</td>
                      <td>{item.no_str}</td>
                      <td class="text-capitalize">{item.status}</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-success btn-sm"
                          onClick={() => validasi(item.id, "disetujui")}
                        >
                          Setujui
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger btn-sm mx-2"
                          onClick={() => validasi(item.id, "ditolak")}
                        >
                          Tolak
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm"
                          onClick={() => delete_dokter(item.id)}
                        >
                          <img src="/assets/img/delete.svg" alt="" srcset="" />
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
