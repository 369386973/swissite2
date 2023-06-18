import React, { useState, useEffect } from 'react';

interface MyComponentProps {}

const MyComponent: React.FC<MyComponentProps> = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {/* 其他组件的 JSX 内容 */}

      {/* 返回顶部按钮 */}
      {showButton && (
        <button
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: '9999',
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            padding: '10px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          onClick={scrollToTop}
        >
          返回顶部
        </button>
      )}
    </div>
  );
};

export default MyComponent;
