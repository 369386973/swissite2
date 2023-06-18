import * as React from 'react'

import { Block, ExtendedRecordMap } from 'notion-types'

import { getPageTweet } from '@/lib/get-page-tweet'

import { PageActions } from './PageActions'
import { PageSocial } from './PageSocial'
import ScrollToTopButton from './ScrollToTopButton';


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
