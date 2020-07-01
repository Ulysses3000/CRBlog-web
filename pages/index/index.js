import Head from 'next/head';
import React from 'react'

import TheGalaxy from './the-galaxy';
import Rcfooter from './rc-footer';

// import './index.styl'

export default class IndexPage extends React.Component {

  isSubPage = false;

  render () {
    return (
      <div>
        <Head>
          <title>云川·RC</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="keywords" content="云川·RC, 云川, Clound River, clound river, river clound, River Clound, RC Blog, 云川博客" />
        </Head>
        <main>
          <TheGalaxy />
          Welcome to river clound
          <Rcfooter />
        </main>
      </div>
    )
  }
}

