"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter(); 
  const [canGoBack, setCanGoBack] = useState(false); 

  useEffect(() => {
    setCanGoBack(window.history.length > 1);
  }, []);

  const handleClick = () => {
    if (canGoBack) {
      router.back();  
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`font-oldStandard underline text-[1.1rem] py-2 rounded-lg transition duration-200 z-[999999] top-2 left-0 ${canGoBack ? "opacity-100" : "opacity-0"}`}
      style={{ pointerEvents: canGoBack ? 'auto' : 'none' }} 
    >
      Retour
    </button>
  );
};

export default BackButton;
