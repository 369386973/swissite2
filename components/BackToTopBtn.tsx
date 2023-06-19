import React, { useState, useEffect } from 'react';
import styles from './index.less';

interface BackToTopBtnProps { }

const BackToTopBtn: React.FC<BackToTopBtnProps> = props => {
    // 定义 visibleBackTopBtn 变量控制 返回顶部 按钮的显隐
  const [visibleBackTopBtn, setVisibleBackTopBtn] = useState(false)

  useEffect(() => {
    // 在 React 中使用 addEventListener 监听事件
    document.addEventListener('scroll', handleScroll, true);
    // 组件卸载时移除事件监听
    return () => document.removeEventListener('scroll', handleScroll)
  }, [visibleBackTopBtn])

  // 滚动事件监听函数
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop  || 0
    // scrollTop 为距离滚动条顶部高度
    // scrollHeight 为整个文档高度
        
    // 我们设定当滚动的距离大于 200 时，显示 【返回顶部】按钮
    if (scrollTop > 200) {
      setVisibleBackTopBtn(true)
    } else {
      setVisibleBackTopBtn(false)
    }
  }
 
  // 点击按钮事件处理函数
  const backToTopHandle = () => {
    // 把页面滚动到页面顶部
    document.body.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {
        visibleBackTopBtn && <div id={styles.backToTop} onClick={backToTopHandle}></div>
      }
    </>
  )
};

export default BackToTopBtn;


