import React, { useState } from 'react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber,
  message = "Olá! Gostaria de mais informações sobre seus serviços."
}) => {
  // Remove qualquer caractere não numérico do número
  const formattedNumber = phoneNumber.replace(/\D/g, '');
  
  // Cria a URL do WhatsApp com o número e mensagem
  const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(message)}`;
  
  // Estado para controlar a expansão em dispositivos móveis (touchscreen)
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleClick = (e: React.MouseEvent) => {
    // Em dispositivos móveis, primeiro toque expande, segundo toque abre o WhatsApp
    if (window.matchMedia('(max-width: 768px)').matches && !isExpanded) {
      e.preventDefault();
      setIsExpanded(true);
    }
  };
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 z-50 flex items-center justify-center overflow-hidden whatsapp-pulse hover:pr-4 pr-0"
      aria-label="Contato via WhatsApp"
      onClick={handleClick}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="p-3">
        <svg 
          width="30" 
          height="30" 
          viewBox="0 0 30 30" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M25.6 4.3C22.8 1.5 19.1 0 15.1 0C6.8 0 0 6.8 0 15.1C0 17.8 0.7 20.4 2 22.7L0 30L7.5 28C9.7 29.2 12.4 29.8 15.1 29.8C23.4 29.8 30.2 23 30.2 14.7C30 10.8 28.5 7.1 25.6 4.3ZM15.1 27.4C12.8 27.4 10.6 26.8 8.6 25.7L8.2 25.5L3.5 26.7L4.7 22.1L4.4 21.7C3.2 19.6 2.6 17.4 2.6 15.1C2.6 8.2 8.2 2.6 15.1 2.6C18.4 2.6 21.5 3.9 23.8 6.2C26.1 8.5 27.4 11.6 27.4 14.9C27.4 21.7 22 27.4 15.1 27.4ZM22 18.2C21.6 18 19.8 17.1 19.4 17C19.1 16.8 18.8 16.8 18.6 17.1C18.3 17.5 17.6 18.2 17.4 18.5C17.2 18.8 17 18.9 16.6 18.6C16.2 18.4 15 18 13.6 16.7C12.5 15.7 11.7 14.6 11.5 14.2C11.3 13.8 11.5 13.6 11.7 13.4C11.9 13.2 12.1 13 12.3 12.7C12.5 12.5 12.5 12.3 12.7 12C12.8 11.7 12.8 11.5 12.7 11.3C12.6 11.1 11.8 9.3 11.5 8.5C11.2 7.7 10.8 7.8 10.6 7.8H9.7C9.4 7.8 8.9 7.9 8.6 8.3C8.2 8.7 7.3 9.6 7.3 11.4C7.3 13.2 8.6 14.9 8.8 15.2C9 15.5 11.7 19.8 15.8 21.3C16.7 21.7 17.4 21.9 18 22.1C19 22.4 19.8 22.3 20.5 22.2C21.2 22.1 22.7 21.3 23 20.4C23.3 19.5 23.3 18.8 23.2 18.6C23.1 18.5 22.8 18.4 22 18.2Z" 
            fill="white"
          />
        </svg>
      </div>
      <span className="font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 max-w-0 group-hover:max-w-[120px] transition-all duration-500 overflow-hidden pr-1">
        Fale Conosco
      </span>
    </a>
  );
};

export default WhatsAppButton;