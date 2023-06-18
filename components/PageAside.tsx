import * as React from 'react'

import { Block, ExtendedRecordMap } from 'notion-types'

import { getPageTweet } from '@/lib/get-page-tweet'

import { PageActions } from './PageActions'
import { PageSocial } from './PageSocial'
import  ScrollToTopButton  from './ScrollToTopButton';
import './styles.module.css';
const App: React.FC = () => {
  return (
    <div className="app-container">
      {/* 其他内容 */}
      <ScrollToTopButton />
    </div>
  );
};

export default App;

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
