
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
  children?: React.ReactNode;
}

const WhatsAppButton = ({ 
  phoneNumber, 
  message = "", 
  className = "", 
  children 
}: WhatsAppButtonProps) => {
  // Remove any non-numeric characters from the phone number
  const formattedNumber = phoneNumber.replace(/\D/g, '');
  
  const handleClick = () => {
    const whatsappURL = `https://wa.me/${formattedNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      className={`bg-[#25D366] hover:bg-[#128C7E] text-white font-medium ${className}`}
    >
      {children || (
        <span className="flex items-center justify-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="mr-2"
          >
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
            <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
            <path d="M8.5 13.5a5 5 0 0 0 7 0" />
          </svg>
          Order via WhatsApp
        </span>
      )}
    </Button>
  );
};

export default WhatsAppButton;
