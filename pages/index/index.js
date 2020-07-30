import Head from 'next/head';
import React from 'react'

import TheGalaxy, { randomSum0NumList } from './the-galaxy';
import Rcfooter from './rc-footer';

import './web-index.styl'
const ringCount = 6;
const ringMinWidth = 50;
export default class IndexPage extends React.Component {

  isSubPage = true;

  static async getInitialProps({ req }) {
    let radomList = randomSum0NumList(ringCount, (100 - ringMinWidth) / ringCount)
    let yRotateRadomList = randomSum0NumList(ringCount, 120)
    let zRotateRadomList = randomSum0NumList(ringCount, 120)
    let animationDurationList = Array.from({length: ringCount}, v=> {
      return ~~(Math.random()*50+15)
    })
    let galaxyRandomData = {
      radomList,
      yRotateRadomList,
      zRotateRadomList,
      animationDurationList
    }
    return { 
      galaxyRandomData
    }
  }

  render () {
    return (
      <div className="index-page">
        <Head>
          <title>云川·RC</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="keywords" content="云川·RC, 云川, Clound River, clound river, river clound, River Clound, RC Blog, 云川博客" />
          <link rel="icon" href="/images/logo_000.png" />
        </Head>
        <div className="content">
            <TheGalaxy 
              galaxyRandomData={ this.props.galaxyRandomData }
              ringCount= { ringCount }
              ringMinWidth = { ringMinWidth }
              />
            <div className="describe">
              <h1>云川</h1>
              <h2>人间留岁月 纸上画荒唐</h2>
            </div>
        </div>
        { this.isSubPage 
            ? <Rcfooter />
            : ''
        }
      </div>
    )
  }
}

