import LayoutAuth from '@/layout/auth';
import Link from 'next/link';
export default function pilihLogin() {
    return (
        <LayoutAuth>
            <div class="text-center w-100 fs-4">
                <p>Masuk Sebagai :</p>
            </div>
            <div class="h-25 w-100">
                <div class="row w-100 justify-content-evenly">
                    <Link class="col-sm-3 align-self-center" href="/auth/dokter">
                        <img src="/assets/img/login-dokter.svg" class="w-100" />
                    </Link>
                    <Link href='/auth/pasien' class="col-sm-3 align-self-center">
                        <img src="/assets/img/login-pasien.svg" class="w-100" />
                    </Link>
                </div>
            </div>
        </LayoutAuth>
    )
}