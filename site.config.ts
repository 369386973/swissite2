import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'e4037ffe4c4c4498b5117478e655f559',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'SWIS',
  domain: 'xiajt.site',
  author: '夏靖涛',

  // open graph metadata (optional)
  description: 'summer',

  // social usernames (optional)
  twitter: 'SWIS-e4037ffe4c4c4498b5117478e655f559',
  github: '369386973/swissite2/tree/2',
  linkedin: '369386973/swissite2/deployments',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  //navigationStyle: 'default'
   navigationStyle: 'custom',
   navigationLinks: [
    {
       title: 'About',
       pageId: 'f1199d37579b41cbabfc0b5174f4256a'
    },
     {
       title: 'Contact',
       pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
     },
     {
       title: 'Link',
       pageId: '98a7c6a01cf84f27956c23e5d8ee3f03'
     }
   ]
})
