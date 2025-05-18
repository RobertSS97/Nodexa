"use client";

/**
 * Este script verifica a compatibilidade do navegador com backdrop-filter
 * e aplica classes especiais no documento para auxiliar nas diferentes
 * implementações de fallback do efeito de blur.
 */

// Função para verificar compatibilidade e aplicar classes auxiliares
export function setupBlurCompatibility() {
  if (typeof window !== 'undefined') {
    // Verificar suporte a backdrop-filter
    const hasBackdropFilterSupport = (() => {
      const testEl = document.createElement('div');
      testEl.style.cssText = 'backdrop-filter: blur(1px); -webkit-backdrop-filter: blur(1px);';
      return (
        testEl.style.backdropFilter === 'blur(1px)' ||
        // @ts-ignore - Webkit prefixes não são reconhecidos pelo TypeScript por padrão
        testEl.style.webkitBackdropFilter === 'blur(1px)'
      );
    })();

    // Adicionar classe ao HTML baseado no suporte
    if (hasBackdropFilterSupport) {
      document.documentElement.classList.add('has-backdrop-filter');
    } else {
      document.documentElement.classList.add('no-backdrop-filter');
      
      // Verificar suporte a filtros SVG
      try {
        const filterTest = SVGFEGaussianBlurElement !== undefined;
        if (filterTest) {
          document.documentElement.classList.add('blur-filter-support');
        }
      } catch (e) {
        // SVG filters não são suportados
        console.log('SVG filters não são suportados neste navegador');
      }
    }

    // Detectar Safari e iOS para tratamento especial
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    if (isSafari) {
      document.documentElement.classList.add('safari');
    }
    
    if (isIOS) {
      document.documentElement.classList.add('ios');
    }
  }
}

// Exporta componente React para usar no layout
export default function BlurCompatibilityDetector() {
  if (typeof window !== 'undefined') {
    setupBlurCompatibility();
  }
  return null;
}
