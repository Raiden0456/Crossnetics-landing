import React, { useState, useEffect } from 'react';

// Define a type for the share links
type ShareLinks = {
  email: string;
  whatsapp: string;
  telegram: string;
  linkedin: string;
};

interface ModalWindowProps {
  isVisible: boolean;
  onClose: () => void;
}

// Function to generate sharing URLs
function generateShareLinks(url: string): ShareLinks {
  return {
    email: `mailto:?subject=Check this out&body=${url}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(url)}`,
    telegram: `https://telegram.me/share/url?url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(url)}`,
  };
}

const ModalWindow: React.FC<ModalWindowProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const [currentUrl, setCurrentUrl] = useState('');
  const [shareLinks, setShareLinks] = useState<ShareLinks>({} as ShareLinks);
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);

  useEffect(() => {
    const url = window.location.href;
    setCurrentUrl(url);
    setShareLinks(generateShareLinks(url));
  }, []);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
  
    // Correctly type-asserting the element as HTMLInputElement
    const inputElement = document.querySelector('#urlInput') as HTMLInputElement;
  
    // Highlight the text if the element exists
    inputElement?.select();
  
    // Show copied message
    setShowCopiedMessage(true);
    setTimeout(() => {
      setShowCopiedMessage(false);
    }, 2000); // Message disappears after 2 seconds
  };
  

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center z-50" onClick={handleBackdropClick}>
      <div className="relative flex flex-col gap-4 mx-6 sm:mx-auto p-10 border w-fit 2xl:w-2/6 shadow-lg rounded-[30px] bg-white">
        <h3 className="text-xl font-bold text-gray-600">Share this page</h3>
        <div className='flex flex-row gap-3 justify-center'>
          <input 
            id="urlInput"
            type="text" 
            value={currentUrl} 
            readOnly 
            className="py-3 px-4 w-full bg-sky-50 rounded-[18px] text-neutral-700" 
          />
          <button 
            onClick={copyToClipboard} 
            className="px-6 bg-sky-100 font-bold text-blue-500 text-sm rounded-[18px] uppercase flex flex-row gap-2 items-center justify-center transition-transform duration-200 hover:scale-105"
          >
            <img src="/copy.svg" alt="copy"/>
            <span>Copy</span>
          </button>
          {showCopiedMessage && (
            <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-white text-gray-700 text-xs rounded-2xl">
              Copied to clipboard!
            </div>
          )}
        </div>
        <div className="flex flex-wrap justify-evenly">
          <a href={shareLinks.email} className="shadow-md shadow-[#00c8ff7b] bg-[#00C8FF] h-14 w-14 rounded-full p-3 items-center flex transition-transform duration-200 hover:scale-110">
            <img src="/email.svg" alt="Email" className='h-8 mx-auto'>
            </img>
          </a>
          <a href={shareLinks.whatsapp} className="shadow-md shadow-[#00ff0084] bg-[#00FF00] h-14 w-14 rounded-full p-3 items-center flex transition-transform duration-200 hover:scale-110">
            <img src="/whatsapp.svg" alt="WhatsApp" className='h-8 mx-auto '>
            </img>
          </a>
          <a href={shareLinks.telegram} className="shadow-md shadow-[#00dade7f] bg-[#00DBDE] h-14 w-14 rounded-full p-3 items-center flex transition-transform duration-200 hover:scale-110">
            <img src="/telegram.svg" alt="Telegram" className='h-8 mx-auto mr-1'>
            </img>
          </a>
          <a href={shareLinks.linkedin} className="shadow-md shadow-[#0076b587] bg-[#0077B5] h-14 w-14 rounded-full p-3 items-center flex transition-transform duration-200 hover:scale-110">
            <img src="/linkedin.svg" alt="LinkedIn" className='h-8 mx-auto ml-px'>
            </img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
