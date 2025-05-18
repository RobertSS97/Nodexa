"use client";

import React, { useEffect, useState } from 'react';

interface BlurBackdropProps {
  isVisible: boolean;
  onClose: () => void;
}

const BlurBackdrop: React.FC<BlurBackdropProps> = ({ isVisible, onClose }) => {
  const [mounted, setMounted] = useState(false);

  // Só renderiza do lado do cliente para evitar problemas de SSR
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (!isVisible) return null;

  return (
    <>
      {/* Camada 1: backdrop escuro */}
      <div 
        onClick={onClose}
        className="fixed inset-0 z-30 bg-black bg-opacity-70"
        style={{
          transition: 'opacity 0.3s ease',
        }}
      ></div>

      {/* Camada 2: efeito de blur utilizando uma imagem SVG */}
      <div 
        className="fixed inset-0 z-31 pointer-events-none"
        style={{
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          filter: 'blur(0)',
        }}
      ></div>

      {/* Fallback para navegadores problemáticos usando CSS filter */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <filter id="blur-filter" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="10"></feGaussianBlur>
        </filter>
      </svg>
    </>
  );
};

export default BlurBackdrop;
