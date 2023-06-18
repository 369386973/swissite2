import * as React, { useEffect, useState }  from 'react'

import { Block, ExtendedRecordMap } from 'notion-types'

import { getPageTweet } from '@/lib/get-page-tweet'

import { PageActions } from './PageActions'
import { PageSocial } from './PageSocial'
import ScrollToTopButton from './ScrollToTopButton';
interface ScrollToTopButtonProps {
  showBelow: number;
}
const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ showBelow }) => {
  const [showButton, setShowButton] = useState(false);
  
  // 监听页面滚动事件，更新按钮显示状态
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
    
    // 清除滚动事件监听
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

const MyComponent: React.FC = () => {
  return (
    <div>
      {/* ... 其他组件内容 ... */}
      
      {/* 在页面底部显示回到顶部按钮 */}
      <ScrollToTopButton showBelow={1200} />
    </div>
  );
};

export default MyComponent;

export const PageAside: React.FC<{
  block: Block
  recordMap: ExtendedRecordMap
  isBlogPost: boolean
}> = ({ block, recordMap, isBlogPost }) => {
  if (!block) {
    return null
  }

  // only display comments and page actions on blog post pages
  if (isBlogPost) {
    const tweet = getPageTweet(block, recordMap)
    if (!tweet) {
      return null
    }

    return <PageActions tweet={tweet} />
  }

  return <PageSocial />
}
