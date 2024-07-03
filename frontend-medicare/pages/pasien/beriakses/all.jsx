import MainLayout from "@/layout/main";
import { env } from "@/next.config";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function akses() {
  const router = useRouter();
  const [data_dokter, set_data_dokter] = useState([]);
  const [filter_dokter, set_filter_dokter] = useState([]);
  const get_dokter = () => {
    axios({
      url: `${env.url}/user/pasien/dokter/auth`,
      method: "post",
      headers: {
        Authorization: env.token,
      },
      data: {
        pasienId: env.user.id,
      },
    }).then(
      (res) => {
        set_data_dokter(res.data.data);
        set_filter_dokter(res.data.data);
      },
      (error) => {}
    );
  };
  const findDokter = async (e) => {
    const input = e.target.value;
    set_filter_dokter([]);
    if (input) {
      const data = data_dokter.filter((data) => {
        const nama = data.nama.toLowerCase();
        const ditemukan = nama.includes(input);
        if (ditemukan) {
          return data;
        }
      });
      set_filter_dokter(data);
    } else {
      set_filter_dokter(data_dokter);
    }
  };
  const aksesDokter = (id) => {
    axios({
      url: `${env.url}/user/pasien/access-to-dokter`,
      method: "post",
      headers: {
        Authorization: env.token,
      },
      data: {
        dokterId: id,
      },
    }).then(() => {
      get_dokter();
    });
  };
  const batalAksesDokter = (id) => {
    axios({
      url: `${env.url}/user/pasien/delete-access-to-dokter`,
      method: "delete",
      headers: {
        Authorization: env.token,
      },
      data: {
        dokterId: id,
      },
    }).then(() => {
      get_dokter();
    });
  };
  useEffect(() => {
    if (!env.user?.id) {
      router.push("/");
    }
    if (!data_dokter.length) {
      get_dokter();
    }
  });
  return (
    <MainLayout>
      <div className="row">
        <div className="row">
          <div className="row justify-content-center">
            <div className="col-4">
              <div class="input-group mb-3">
                <input
                  onChange={findDokter}
                  type="text"
                  class="form-control"
                  placeholder="Nama Dokter"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>
          <div className="col">
            <table class="table table-light table-sm">
              <thead>
                <tr class="table-light fw-bold">
                  <td class="table-light">No</td>
                  <td>Nama</td>
                  <td>Nomor STR</td>
                  <td>Aksi</td>
                </tr>
              </thead>
              <tbody>
                {filter_dokter.map((item, index) => {
                  return (
                    <tr class="table-light" key={index}>
                      <td class="table-light">{index + 1}</td>
                      <td>Dr. {item.nama}</td>
                      <td>{item.no_str}</td>
                      <td>
                        {!item.akses && (
                          <button
                            type="button"
                            onClick={() => aksesDokter(item.id)}
                            class="btn btn-success btn-sm"
                          >
                            Berikan Akses
                          </button>
                        )}
                        {item.akses && (
                          <button
                            type="button"
                            onClick={() => batalAksesDokter(item.id)}
                            class="btn btn-danger btn-sm"
                          >
                            Batalkan Akses
                          </button>
                        )}
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
