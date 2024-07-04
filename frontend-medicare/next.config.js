/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  port: "3030",
  env: {
    user: {},
    token: null,
    refresh_token: null,
    url: "http://0.0.0.0:3000",
    data_pasien: {},
    no_rekam_medis: null,
  },
};

module.exports = nextConfig;
