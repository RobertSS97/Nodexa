"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import { useEffect } from "react";

// CSS Globais primeiro
import "./globals.css"; 

import WhatsAppButton from '@/components/WhatsAppButton';
import baseURL from '@/utils/paths';

const inter = Inter({ subsets: ["latin"] });

// Definir detalhes de metadados localmente, já que não podemos exportar 'metadata' de um client component.
const pageMetaDetails = {
  title: "Nodexa - Soluções de TI de Alta Tecnologia",
  description:
    "Suporte técnico, consultoria de TI e desenvolvimento de softwares de alta tecnologia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Adicionando interatividade do menu ao layout (efeito de marcar link ativo no scroll)
  useEffect(() => {
    const markActiveLink = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100; // Ajuste o offset conforme necessário
      
      sections.forEach(section => {
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop;
        const sectionHeight = htmlSection.clientHeight;
        const sectionId = htmlSection.getAttribute('id');
        
        const navLinks = document.querySelectorAll('nav a[href^="#"]'); // Seleciona links internos da navegação
        navLinks.forEach(link => {
          const navLink = link as HTMLAnchorElement;
          if (navLink.getAttribute('href') === `#${sectionId}`) {
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              navLink.classList.add('active-link');
            } else {
              navLink.classList.remove('active-link');
            }
          }
        });
      });
    };
    
    window.addEventListener('scroll', markActiveLink);
    markActiveLink(); // Chama uma vez para definir o estado inicial

    return () => {
      window.removeEventListener('scroll', markActiveLink);
    };
  }, []);

  const navLinks: Array<[string, string]> = [
    ["Início", "#hero"],
    ["Serviços", "#services"],
    ["Sobre", "#about"],
    ["Contato", "#contact"],
  ];

  return (
    <html lang="pt-BR">
      <body className={`${inter.className} overflow-x-hidden`}>
        <main>
          <header className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between p-4 md:px-8 bg-transparent backdrop-blur-sm bg-slate-900/75">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Nodexa
            </Link>
            <nav className="hidden md:flex space-x-6">
              {navLinks.map(([label, href]) => (
                <Link key={label} href={href} className="hover:text-blue-400 transition-colors">
                  {label}
                </Link>
              ))}
            </nav>
            <div className="md:hidden">
              {/* Área do menu mobile foi removida */}
            </div>
          </header>
          
          {children}
          
          {/* Adicionar a propriedade phoneNumber ao WhatsAppButton */}
          <WhatsAppButton phoneNumber="5511912345678" />
          
          <footer className="bg-slate-800 text-center p-8 mt-16">
            <p>&copy; {new Date().getFullYear()} Nodexa. Todos os direitos reservados.</p>
            <p className="text-sm text-slate-400">Desenvolvido com paixão e Next.js</p>
          </footer>
        </main>
      </body>
    </html>
  );
}
