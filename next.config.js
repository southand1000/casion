/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // ビルド時の型チェックを無効化する
    ignoreBuildErrors: true,
  },
  eslint: {
    // ビルド時のeslintチェックを無効化する
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;