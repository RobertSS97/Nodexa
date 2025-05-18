"use client";

import Image from "next/image";
import { useEffect } from 'react';
import TechLogos from '@/components/TechLogos';

export default function Home() {
  useEffect(() => {
    // Menu que muda de cor ao rolar, mas mantém o efeito de blur
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('bg-black/60');
          header.classList.remove('bg-transparent');
        } else {
          header.classList.remove('bg-black/60');
          header.classList.add('bg-transparent');
        }
      }
    };

    // Fechar menu mobile quando clicar em links
    const closeMenu = () => {
      const checkbox = document.getElementById('menu-toggle') as HTMLInputElement;
      if (checkbox && checkbox.checked) {
        checkbox.checked = false;
      }
    };

    // Scroll suave para links de âncora
    document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();
        
        const element = anchor as HTMLAnchorElement;
        const targetId = element.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          closeMenu();
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Ajuste para o header fixo
            behavior: 'smooth'
          });
        }
      });
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      {/* Hero Section */}
      <section id="home" className="relative flex items-center min-h-screen py-20 px-6 overflow-hidden bg-black">
        {/* Background com efeitos modernos */}
        <div className="absolute inset-0 bg-[#050505] z-0"></div>
        <div className="absolute inset-0 opacity-10 z-0">
          {/* Grid pattern simulado com divs para evitar problemas com imagens */}
          <div className="w-full h-full" style={{
            backgroundImage: "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
            backgroundSize: "30px 30px"
          }}></div>
        </div>
        
        {/* Partículas ou pontos de luz animados com movimento */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Partícula 1 - azul grande, movimento lento */}
          <div className="absolute h-2 w-2 rounded-full bg-blue-400 top-1/4 left-1/4 animate-pulse animate-float-slow"></div>

          {/* Partícula 2 - azul grande, movimento médio */}
          <div className="absolute h-2 w-2 rounded-full bg-blue-400 top-1/2 left-3/4 animate-pulse-slow animate-float-medium"></div>

          {/* Partícula 3 - azul grande, movimento rápido */}
          <div className="absolute h-2 w-2 rounded-full bg-blue-400 top-3/4 left-1/3 animate-pulse animate-float-fast"></div>

          {/* Partícula 4 - roxa pequena, movimento lento */}
          <div className="absolute h-1 w-1 rounded-full bg-purple-400 top-1/3 left-2/3 animate-pulse-slower animate-float-medium"></div>

          {/* Partícula 5 - roxa pequena, movimento médio */}
          <div className="absolute h-1 w-1 rounded-full bg-purple-400 bottom-1/3 left-1/4 animate-pulse-slow animate-float-slow"></div>

          {/* Partícula extra 1 - azul média */}
          <div className="absolute h-1.5 w-1.5 rounded-full bg-blue-500 top-1/5 right-1/4 animate-pulse-slow animate-float-fast"></div>

          {/* Partícula extra 2 - ciano pequena */}
          <div className="absolute h-1 w-1 rounded-full bg-cyan-400 bottom-1/4 right-1/3 animate-pulse animate-float-medium"></div>

          {/* Partícula extra 3 - roxa média brilhante */}
          <div className="absolute h-1.5 w-1.5 rounded-full bg-purple-500 bottom-2/5 left-1/6 animate-pulse-slower animate-float-slow"></div>

          {/* Partícula extra 4 - azul grande com rastro */}
          <div className="absolute top-1/6 right-1/5">
            <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-blue-400/70 -ml-3 mt-1 animate-pulse-slow"></div>
            <div className="h-1 w-1 rounded-full bg-blue-400/50 -ml-5 mt-2 animate-pulse-slower"></div>
          </div>

          {/* Partícula com trilha 1 */}
          <div className="absolute top-2/5 right-1/4 animate-float-medium">
            <div className="relative">
              <div className="absolute -top-1 -left-1 h-3 w-3 rounded-full bg-blue-400/10"></div>
              <div className="absolute -top-0.5 -left-0.5 h-2 w-2 rounded-full bg-blue-400/30"></div>
              <div className="h-1 w-1 rounded-full bg-blue-400 animate-pulse"></div>
            </div>
          </div>

          {/* Partícula com trilha 2 */}
          <div className="absolute bottom-1/3 right-2/5 animate-float-slow">
            <div className="relative">
              <div className="absolute -top-1 -left-1 h-3 w-3 rounded-full bg-purple-400/10"></div>
              <div className="absolute -top-0.5 -left-0.5 h-2 w-2 rounded-full bg-purple-400/20"></div>
              <div className="h-1 w-1 rounded-full bg-purple-400 animate-pulse-slow"></div>
            </div>
          </div>
        </div>
        
        {/* Gradiente luminoso sutil */}
        <div className="absolute left-0 top-1/4 w-1/3 h-1/2 bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute right-0 bottom-1/4 w-1/3 h-1/2 bg-purple-500/10 rounded-full blur-[100px]"></div>
        
        <div className="container max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center md:justify-between">
          {/* Conteúdo de texto - Lado esquerdo */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Transformamos 
              <span className="block">ideias em</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                tecnologia
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg">
              Soluções digitais de alta performance para impulsionar o seu negócio no mundo digital
            </p>
            
            <div className="flex flex-wrap gap-5">
              <a 
                href="#contact" 
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Fale Conosco
              </a>
              <a 
                href="#services" 
                className="border border-blue-500 text-blue-400 hover:bg-blue-500/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Nossos Serviços
              </a>
            </div>
          </div>
          
          {/* Ilustração - Lado direito */}
          <div className="md:w-1/2 flex justify-center relative">
            {/* Container do Terminal/Editor - Formato 16:9 */}
            <div className="relative transition-transform duration-500 hover:-rotate-1 w-full max-w-xl">
              {/* Terminal principal - 16:9 aspect ratio */}
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-xl p-5 w-full aspect-video relative z-10 border border-blue-500/20 shadow-2xl shadow-blue-600/20">
                {/* Barra de título com botões */}
                <div className="flex justify-between items-center mb-4 border-b border-blue-500/20 pb-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-blue-300 font-mono">nodexa_terminal</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-4 h-4 rounded bg-blue-800/60 flex items-center justify-center">
                      <span className="text-blue-300 text-xs">-</span>
                    </div>
                    <div className="w-4 h-4 rounded bg-blue-800/60 flex items-center justify-center">
                      <span className="text-blue-300 text-xs">□</span>
                    </div>
                  </div>
                </div>
                
                {/* Área de terminal com linhas de código */}
                <div className="font-mono text-sm">
                  {/* Linha de comando com cursor piscante */}
                  <div className="flex mb-2">
                    <span className="text-green-400 mr-2">nodexa@server:~$</span>
                    <span className="text-blue-200">npm run deploy</span>
                  </div>
                  
                  {/* Saída do comando */}
                  <div className="space-y-1.5 text-xs">
                    <div className="text-gray-400">{' > nodexa-solutions@1.0.0 deploy'}</div>
                    <div className="text-gray-400">{' > vercel --prod'}</div>
                    <div className="h-1"></div>
                    <div className="text-blue-300">Vercel CLI 24.0.0</div>
                    <div className="flex gap-2 items-center">
                      <div className="animate-pulse">
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-white">Optimizing application...</span>
                    </div>
                    
                    {/* Animação de progresso */}
                    <div className="w-full bg-blue-900/30 rounded-full h-1.5 my-3">
                      <div className="bg-blue-500 h-1.5 rounded-full animate-[progress_3s_ease-in-out_forwards]" style={{width: '60%'}}></div>
                    </div>
                    
                    <div className="text-gray-400">✓ Building application</div>
                    <div className="text-gray-400">✓ Compiling Next.js application</div>
                    <div className="text-gray-400">✓ Optimizing assets</div>
                    <div className="text-white mt-2">✨ Deployment complete! Your site is live at <span className="text-blue-400">nodexa.vercel.app</span></div>
                  </div>
                </div>
              </div>
              
              {/* Snippet de código flutuante */}
              <div className="absolute -bottom-14 -right-14 md:-right-16 lg:-right-20 bg-gray-900/90 backdrop-blur-md border border-gray-700 rounded-lg p-5 shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="font-mono text-xs md:text-sm">
                  <div className="text-gray-500">&lt;div&gt;</div>
                  <div className="pl-4 text-cyan-400">await</div>
                  <div className="pl-6 text-blue-400">build()</div>
                  <div className="pl-6 text-blue-400">deploy()</div>
                  <div className="text-gray-500">&lt;/div&gt;</div>
                </div>
              </div>
              
              {/* Elemento de linha conectando os componentes */}
              <div className="absolute bottom-10 -right-6 h-14 w-px bg-gradient-to-b from-transparent via-blue-400 to-transparent"></div>
              
              {/* Efeitos de luz/glow */}
              <div className="absolute -z-10 -bottom-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -z-10 -top-5 -right-5 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
              
              {/* Indicador de status e estatísticas */}
              <div className="absolute -bottom-5 -left-5 bg-gray-900/80 backdrop-blur-sm border border-blue-900/30 px-4 py-2 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400"></div>
                  <span className="text-xs text-blue-300 font-mono">online: 99.9%</span>
                </div>
              </div>
            </div>
            
            {/* Padrão de pontos decorativo - mantido do código original */}
            <div className="absolute -z-10 -bottom-20 -right-20 w-40 h-40 opacity-20">
              <div className="grid grid-cols-5 gap-2">
                {[...Array(25)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Indicador de rolagem com animação suave */}
        <a 
          href="#services" 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400 hover:text-blue-400 transition-colors duration-300"
          aria-label="Rolar para serviços"
        >
          <span className="text-sm font-light mb-2 tracking-wider">scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-blue-400 to-transparent animate-pulse"></div>
        </a>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="container max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-block mb-3">
              <span className="bg-blue-500 h-1 w-12 block mx-auto"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nossos Serviços
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Soluções customizadas para impulsionar seu negócio no cenário digital
              atual
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-blue-500 transition-all duration-500 backdrop-blur-md relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-5 p-4 bg-blue-900/30 rounded-xl inline-block">
                  <Image
                    src="/window.svg"
                    alt="Suporte Técnico"
                    width={32}
                    height={32}
                    className="text-blue-400"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                  Suporte Técnico
                </h3>
                <p className="text-gray-400">
                  Assistência 24/7 com equipe especializada para resolver seus
                  problemas de TI com rapidez e eficiência.
                </p>
                <div className="mt-6 flex items-center text-blue-400">
                  <span className="text-sm font-semibold">Saiba mais</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-blue-500 transition-all duration-500 backdrop-blur-md relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-5 p-4 bg-blue-900/30 rounded-xl inline-block">
                  <Image
                    src="/globe.svg"
                    alt="Consultoria"
                    width={32}
                    height={32}
                    className="text-blue-400"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                  Consultoria de TI
                </h3>
                <p className="text-gray-400">
                  Análise estratégica e otimização da sua infraestrutura
                  tecnológica para garantir competitividade.
                </p>
                <div className="mt-6 flex items-center text-blue-400">
                  <span className="text-sm font-semibold">Saiba mais</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-blue-500 transition-all duration-500 backdrop-blur-md relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-5 p-4 bg-blue-900/30 rounded-xl inline-block">
                  <Image
                    src="/file.svg"
                    alt="Desenvolvimento"
                    width={32}
                    height={32}
                    className="text-blue-400"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                  Desenvolvimento de Software
                </h3>
                <p className="text-gray-400">
                  Criação de soluções personalizadas com as tecnologias mais
                  modernas do mercado.
                </p>
                <div className="mt-6 flex items-center text-blue-400">
                  <span className="text-sm font-semibold">Saiba mais</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Features Section */}
      <section className="py-24 px-6 bg-black relative overflow-hidden">
        {/* Tech Pattern Background */}
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('/circuit.png')] bg-repeat"></div>

        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-3">
                <span className="bg-blue-500 h-1 w-12 block"></span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Tecnologia de ponta para seu negócio
              </h2>
              <p className="text-gray-400 mb-8">
                Utilizamos as mais recentes tecnologias e metodologias para
                garantir que sua empresa esteja sempre à frente no mercado digital.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-blue-900/30 p-3 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Inteligência Artificial
                    </h3>
                    <p className="text-gray-400">
                      Implementamos soluções de IA para automatizar processos e
                      extrair insights valiosos dos seus dados.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-900/30 p-3 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Cibersegurança Avançada
                    </h3>
                    <p className="text-gray-400">
                      Protegemos seus dados e sistemas com as mais modernas
                      soluções de segurança digital.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-900/30 p-3 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Cloud Computing
                    </h3>
                    <p className="text-gray-400">
                      Migração e gerenciamento de infraestrutura na nuvem para
                      maior escalabilidade e redução de custos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden border border-blue-500/30 shadow-lg shadow-blue-500/20">
                <Image
                  src="/tech-image.jpg"
                  alt="Tecnologia Avançada"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
              <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
              {/* Code decorations */}
              <div className="absolute -bottom-4 -right-4 bg-gray-900/80 backdrop-blur-sm border border-gray-800 p-4 rounded-lg text-xs font-mono text-blue-400">
                {`<code>\n  await nodexa.solve(yourProblem);\n</code>`}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gray-900">
        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative w-full aspect-[4/3] bg-black rounded-2xl overflow-hidden border border-gray-800 shadow-lg shadow-blue-900/10">
              {/* Replace the placeholder with a better image */}
              <Image
                src="/tech-team.jpg"
                alt="Sobre a Nodexa"
                fill={true}
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="bg-blue-500/20 backdrop-blur-md px-4 py-2 rounded-full inline-block mb-2">
                  <span className="text-xs font-semibold text-blue-300">
                    Desde 2008
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">Equipe Nodexa</h3>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="inline-block mb-3">
              <span className="bg-blue-500 h-1 w-12 block"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sobre a Nodexa
            </h2>
            <p className="text-gray-400 mb-6">
              A Nodexa nasceu da visão de transformar o modo como as empresas
              utilizam a tecnologia. Estamos comprometidos em oferecer serviços de
              TI de alta qualidade que impulsionam o crescimento e a eficiência
              dos negócios.
            </p>
            <p className="text-gray-400 mb-6">
              Nossa equipe é formada por especialistas apaixonados por tecnologia,
              sempre atualizados com as últimas tendências e ferramentas do
              mercado.
            </p>
            <p className="text-gray-400 mb-8">
              Trabalhamos com metodologias ágeis para garantir entregas rápidas e
              alinhadas com as necessidades dos nossos clientes.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="border border-gray-800 rounded-xl p-4 bg-black/50 backdrop-blur-sm w-32 text-center">
                <span className="text-blue-400 text-2xl font-bold block">
                  15+
                </span>
                <span className="text-gray-500 text-xs block mt-1">
                  Anos de experiência
                </span>
              </div>
              <div className="border border-gray-800 rounded-xl p-4 bg-black/50 backdrop-blur-sm w-32 text-center">
                <span className="text-blue-400 text-2xl font-bold block">
                  500+
                </span>
                <span className="text-gray-500 text-xs block mt-1">
                  Projetos entregues
                </span>
              </div>
              <div className="border border-gray-800 rounded-xl p-4 bg-black/50 backdrop-blur-sm w-32 text-center">
                <span className="text-blue-400 text-2xl font-bold block">
                  98%
                </span>
                <span className="text-gray-500 text-xs block mt-1">
                  Clientes satisfeitos
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-black relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black to-purple-900/10 z-0"></div>

        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="mb-16 text-center">
            <div className="inline-block mb-3">
              <span className="bg-blue-500 h-1 w-12 block mx-auto"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              O que nossos clientes dizem
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Veja como nossas soluções têm transformado negócios ao redor do país
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 relative">
              <div className="absolute -top-4 left-8 bg-blue-500 text-white text-3xl w-8 h-8 flex items-center justify-center rounded-full">
                "
              </div>
              <p className="text-gray-300 mb-6 mt-4">
                A equipe da Nodexa conseguiu transformar completamente nossa
                infraestrutura de TI, aumentando a produtividade em 40% e reduzindo
                custos.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden mr-4">
                  <Image
                    src="/avatar-1.jpg"
                    alt="Cliente"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-white">Roberto Almeida</h4>
                  <p className="text-sm text-gray-500">CEO, TechVision</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 relative">
              <div className="absolute -top-4 left-8 bg-blue-500 text-white text-3xl w-8 h-8 flex items-center justify-center rounded-full">
                "
              </div>
              <p className="text-gray-300 mb-6 mt-4">
                O sistema personalizado desenvolvido pela Nodexa nos permitiu
                automatizar processos que antes levavam dias para serem concluídos.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden mr-4">
                  <Image
                    src="/avatar-2.jpg"
                    alt="Cliente"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-white">Carla Mendes</h4>
                  <p className="text-sm text-gray-500">COO, Innova Corp</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 relative">
              <div className="absolute -top-4 left-8 bg-blue-500 text-white text-3xl w-8 h-8 flex items-center justify-center rounded-full">
                "
              </div>
              <p className="text-gray-300 mb-6 mt-4">
                O suporte técnico da Nodexa é incomparável. Resposta rápida e
                soluções eficientes para qualquer problema que surgir.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden mr-4">
                  <Image
                    src="/avatar-3.jpg"
                    alt="Cliente"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-white">Marcos Silva</h4>
                  <p className="text-sm text-gray-500">CTO, DataSphere</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-5 bg-[url('/grid.png')] bg-repeat"></div>

        <div className="container max-w-4xl mx-auto relative z-10">
          <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-2xl p-8 md:p-12 shadow-lg shadow-blue-900/5">
            <div className="mb-10 text-center">
              <div className="inline-block mb-3">
                <span className="bg-blue-500 h-1 w-12 block mx-auto"></span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Entre em Contato
              </h2>
              <p className="text-gray-400">
                Estamos prontos para transformar sua visão em realidade
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder="Como podemos ajudar?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder="Descreva seu projeto ou necessidade..."
                ></textarea>
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-10 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-900/30"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Tecnologias Section */}
      <section id="tecnologias" className="py-20 bg-gradient-to-b from-black to-blue-950/30">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Tecnologias que <span className="text-blue-500">Utilizamos</span>
          </h2>
          
          <p className="text-center text-gray-300 max-w-3xl mx-auto mb-10">
            Trabalhamos com as mais modernas e eficientes tecnologias do mercado para 
            entregar soluções de alta performance, seguras e escaláveis.
          </p>
          
          <TechLogos />
        </div>
      </section>
    </main>
  );
}
