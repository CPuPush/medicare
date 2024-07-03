import { env } from "@/next.config";
import axios from "axios";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const host = "http://localhost";
  const port = 3030;
  env.url = `${host}:${port}`;
  env.user = {};
  env.data_user = {};
  useEffect(() => {
    router.push("/auth");
  });
}
