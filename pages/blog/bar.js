import React from 'react'

export default class BlogBar extends React.Component {
  isHorizontal = false

  unit = 'y' // 'm'

  timeData = ['20200101', '20200102', '20200502', '20200602', '20200702', '20200902', '20201002']


  formatTimes () {
    let tempStrArr = [...new Set(this.timeData)]
    tempStrArr.sort((a, b)=> {
      return a - b;
    })
    return tempStrArr.map(t => {
      let y = t.slice(0, 4)
      let m = t.slice(4, 6)
      let d = t.slice(6, 8)
      return { value: t, y, m, d };
    })
  }

  get renderData () {
    let d = [];
    this.formatTimes().forEach(t => {
      let key = this.unit === 'y' ? t.y : t.y+'-'+t.m
      let value = this.unit === 'y' ? t.m : t.d
      let index = d.findIndex(di => di.id === key);
      if ( index >= 0 ) {
        if (!(t.m in d[index])) {
          d[index].children.push(t.m);
        }
      } else {
        d.push({ id: key, children: [value] })
      }
    })
    return d;
  }

  render () {
    return (
      <div className="bar">
        <div className="switch">
          <button>时间</button>
          <button>标签</button>
        </div>
        <div className="bar">
          {
            this.renderData.forEach(e => {
              return (
                <ul>
                  <li className="ulTitle">e.id</li>
                  {
                    e.children.forEach( item => {
                      return (<li> { item } </li>)
                    } )
                  }
                </ul>
              )
            })
          }
        </div>
        <div className="tagList"></div>
      </div>
    )
  }
}
