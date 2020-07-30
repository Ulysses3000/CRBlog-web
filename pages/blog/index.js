import Head from 'next/head';
import React from 'react'
import './blog-index.styl'

import Bar from './bar'

function BlogListHead () {
  return (
    <Head>
      <title>云川·Blog</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="keywords" content="云川·RC, 云川, Clound River, clound river, river clound, River Clound, RC Blog, 云川博客" />
      <link rel="icon" href="/images/logo_000.png" />
    </Head>
  )
}

export default class BlogList extends React.Component {

  constructor () {
    super()
    this.state = {
      searchPlaceholder: '',
      searchValue: ''
    }
  }

  searchChange (e) {
    this.setState({
      searchValue: e.target.value
    })
  }

  renderHead () {
    return (
      <div className="head">
          <div className="brand">
            <img src="/images/logo_000.png" width="32" alt=""/>
            <h1>云川博客 <a href="/blog">云川博客</a> </h1>
          </div>
          <input type="text"
            placeholder={ this.state.searchPlaceholder }
            value={ this.state.searchValue }
            onChange={ (e) => { this.searchChange(e) } } />
          <div className="page-nav">
            <div className="icon">
              { Array(9).fill('').map((v,i) => {
                return ( <span key={i} /> );
              }) }
            </div>
          </div>
        </div>
        
    )
  }

  render () {
    return (
      <div className="blog-list-page">
        <BlogListHead />
        { this.renderHead() }
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