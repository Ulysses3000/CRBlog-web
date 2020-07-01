import React from 'react'

export default class TheGalaxy extends React.Component {
  upsideDown = false;

  render () {
    return (
      <div>
        <div className="galaxy-box">
          <div className="center"></div>
          <ul>
            <li>*</li>
            <li>*</li>
          </ul>
          <div className="section mine">
            二十
          </div>
        </div>
      </div>
    )
  }
}
