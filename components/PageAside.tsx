import * as React from 'react'

import { Block, ExtendedRecordMap } from 'notion-types'

import { getPageTweet } from '@/lib/get-page-tweet'

import { PageActions } from './PageActions'
import { PageSocial } from './PageSocial'
import ScrollToTopButton from './ScrollToTopButton';


const MyComponent: React.FC = () => {
  return (
    <div>
     <button style={{position: 'fixed', bottom: '20px', right: '20px', zIndex: '9999', backgroundColor: '#000', color: '#fff', border: 'none', padding: '10px', borderRadius: '4px', cursor: 'pointer'}}>
        
      </button>
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
