const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  });
  
  const nextConfig = {
    images: {
      domains: ["cdn.discordapp.com"],
      unoptimized: true, // Для next export
    },
    trailingSlash: true, // Додає / в кінці URL (важливо для GitHub Pages)
    experimental: {
      appDir: false, // Вимикає новий app router (якщо Next.js 14+)
    },
    reactStrictMode: true,
    swcMinify: true,
    exportPathMap: async function (defaultPathMap) {
      return {
        ...defaultPathMap,
      };
    },
  };
  
  module.exports = withPWA(nextConfig);