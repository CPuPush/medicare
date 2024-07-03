import MainLayout from "@/layout/main";

export default function akses() {
    return (
        <MainLayout>
            <div className="row">
                <div className="row">
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
                                <tr class="table-light">
                                    <td class="table-light">1</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>
                                        <button type="button" class="btn btn-warning btn-sm">Warning</button>
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