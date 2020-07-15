import React from 'react'
import './the-galsxy.styl'

function randomSum0NumList (length, maxDif = 10) {
  let max = maxDif / 2;
  let list1Length = ~~( (length - 2) / 2)
  let list2Length = length - 2 - list1Length;
  let list1 = Array.from({length: list1Length}, v=> ~~(Math.random()* max))
  let list2 = Array.from({length: list2Length}, v=> -~~(Math.random()* max))
  let other = 0 - list1.concat(list2).reduce((now, next) => now ? 0 :( now + next))
  let other1 = ~~( (other - 2) / 2)
  let result = [other1, other-other1, ...list1, ...list2 ]
  result.sort(x => Math.random() > 0.5 ? 1 : -1)
  return result;
}

export default class TheGalaxy extends React.Component {
  upsideDown = false;
  xRotate = 0;

  render () {
    let ringCount = 10;
    let ringMinWidth = 50;
    let radomList = randomSum0NumList(ringCount, (100 - ringMinWidth) / ringCount)
    let xRotateRadomList = randomSum0NumList(ringCount, 120)
    let yRotateRadomList = randomSum0NumList(ringCount, 120)
    let zRotateRadomList = randomSum0NumList(ringCount, 120)
    let animationDurationList = Array.from({length: ringCount}, v=> {
      return ~~(Math.random()*50+15)
    })
    return (
      <div>
        <div className="galaxy-box">
          <div className="center"></div>
          <ul style={{ transform: `rotateX(${this.xRotate}deg)` }}>
            {
              Array.from({length: ringCount}, (v, i) => {
                let width = i * 50 / ringCount + ringMinWidth + radomList[i]
                let xRotate = 0 // xRotateRadomList[i]
                return (
                  <li key={i} style={ {
                      width:  width + '%',
                      transform: `
                        translate(-50%, -50%) 
                        rotateX(${xRotate}deg) 
                        rotateY(${yRotateRadomList[i]}deg)
                        rotateZ(${zRotateRadomList[i]}deg)
                      `
                    } }>
                      <div style={{ 
                          animationDuration: animationDurationList[i] + 's' 
                        }}>
                      </div>
                  </li>
                )
              })
                
            }
          </ul>
          <div className="section mine">
            二十
          </div>
        </div>
      </div>
    )
  }
}
