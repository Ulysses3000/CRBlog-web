import Head from 'next/head';
import React from 'react'
import './blog-index.styl'

import Bar from './bar'

export default class BlogList extends React.Component {
  render () {
    return (
      <div className="page">
        <Head>
          <title>云川·Blog</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="keywords" content="云川·RC, 云川, Clound River, clound river, river clound, River Clound, RC Blog, 云川博客" />
        </Head>
        <div className="head">
          <div className="brand">
            <span>logo</span>
            {/* <h1>云川博客</h1> */}
          </div>
          <input type="text"/>
          <div className="page-nav">
            <div className="icon">o</div>
          </div>
        </div>
        <div className="main">
          <div className="bar">
            <Bar />
          </div>
          <div className="list">
            333
          </div>
        </div>
      </div>
    )
  }
}