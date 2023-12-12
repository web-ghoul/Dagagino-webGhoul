/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        localeDetection: false, // 👈
        locales: ["ar", "en"],  // 👈
        defaultLocale: "en"     // 👈
    }
}

module.exports = nextConfig
