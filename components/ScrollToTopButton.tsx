import React, { useState, useEffect } from 'react';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 监听页面滚动事件
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true); // 当页面滚动超过 300px 时显示回到顶部按钮
    } else {
      setIsVisible(false); // 否则隐藏按钮
    }
  };

  // 添加滚动事件监听器
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 点击按钮滚动回顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 平滑滚动
    });
  };

  return (
    <button
      className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      回到顶部
    </button>
  );
};

export default ScrollToTopButton;
