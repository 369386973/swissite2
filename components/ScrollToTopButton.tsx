import React, { useEffect, useState } from 'react';

interface ScrollToTopButtonProps {
  showBelow: number;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ showBelow }) => {
  const [showButton, setShowButton] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > showBelow) {
        if (!showButton) {
          setShowButton(true);
        }
      } else {
        if (showButton) {
          setShowButton(false);
        }
      }
    };
    
    document.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [showButton, showBelow]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showButton && (
        <button className="scroll-to-top-button" onClick={scrollToTop}>
          返回顶部
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
