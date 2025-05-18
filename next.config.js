/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Necessário para exportação estática
  basePath: process.env.NODE_ENV === 'production' ? '/nodexa' : '', // Nome do repositório
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        port: '',
        pathname: '/gh/devicons/devicon/icons/**',
      },
    ],
    unoptimized: true, // Necessário para GitHub Pages
  },
  trailingSlash: true, // Ajuda na navegação de arquivos estáticos
};

module.exports = nextConfig;