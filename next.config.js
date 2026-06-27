/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // eslintの設定はここに書かずに、別の方法で無視させます
};

module.exports = nextConfig;