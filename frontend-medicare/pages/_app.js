import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css';
import { useEffect } from "react";
import { useRouter } from 'next/router';
export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  })
  return (
    <Component {...pageProps} />
  )
}
