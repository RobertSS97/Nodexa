"use client";

// Esse arquivo serve como um script de depuração para o efeito de blur
// Adiciona informações no console para diagnosticar problemas com o efeito blur

interface ExtendedCSSStyleDeclaration extends CSSStyleDeclaration {
  webkitBackdropFilter: string;
}

export const supportsBackdropFilter = (() => {
  if (typeof window === 'undefined') return false;
  
  const testEl = document.createElement('div');
  const extendedStyle = testEl.style as ExtendedCSSStyleDeclaration;
  
  return (
    extendedStyle.backdropFilter === 'blur(1px)' || 
    extendedStyle.webkitBackdropFilter === 'blur(1px)'
  );
})();

export function checkBlurCompatibility() {
  if (typeof window !== 'undefined') {
    console.log('--- Nodexa Blur Effect Diagnostics ---');
    
    // Verifica compatibilidade com backdrop-filter
    const hasBackdropFilter = supportsBackdropFilter;
    
    console.log(`Suporte a backdrop-filter: ${hasBackdropFilter ? 'Sim' : 'Não'}`);
    
    // Verifica compatibilidade com filtros SVG
    let hasSvgFilterSupport = false;
    try {
      hasSvgFilterSupport = typeof SVGFEGaussianBlurElement !== 'undefined';
    } catch (e) {
      hasSvgFilterSupport = false;
    }
    console.log(`Suporte a filtros SVG: ${hasSvgFilterSupport ? 'Sim' : 'Não'}`);
    
    // Verifica navegador
    const userAgent = navigator.userAgent;
    const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(userAgent);
    const isChrome = /chrome/i.test(userAgent);
    const isFirefox = /firefox/i.test(userAgent);
    const isEdge = /edg/i.test(userAgent);
    
    console.log('Navegador detectado:');
    console.log(`- Safari: ${isSafari ? 'Sim' : 'Não'}`);
    console.log(`- iOS: ${isIOS ? 'Sim' : 'Não'}`);
    console.log(`- Chrome: ${isChrome ? 'Sim' : 'Não'}`);
    console.log(`- Firefox: ${isFirefox ? 'Sim' : 'Não'}`);
    console.log(`- Edge: ${isEdge ? 'Sim' : 'Não'}`);
    
    // Outras informações úteis
    console.log(`Largura da janela: ${window.innerWidth}px`);
    console.log(`É dispositivo móvel: ${window.innerWidth <= 768 ? 'Sim' : 'Não'}`);
    console.log('-------------------------');
  }
}

// Auto-executar a verificação quando for importado
if (typeof window !== 'undefined') {
  // Espera o DOM estar pronto
  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(checkBlurCompatibility, 1000);
  });
}

export default checkBlurCompatibility;
