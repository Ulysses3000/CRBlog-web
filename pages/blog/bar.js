import React from 'react'

export default class BlogBar extends React.Component {
  isHorizontal = false

  barType = 'time'

  unit = 'y' // 'm'

  timeData = ['20200101', '20200102', '20100502', '201900602', '20200702', '20200902', '20201002']


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
    d.forEach(di => {
      di.children = [...new Set(di.children)]
    })
    return d;
  }

  timeHandle (e) {
    console.log(e.target);
  }

  tagList = [ {id: 1, name: 'js'}, {name: 'html', id: 2}, {name: 'css', id: 3} ]

  render () {
    return (
      <div className="bar-wrap">
        <div className="switch">
          <button>时间</button>
          <button>标签</button>
        </div>
        {
          this.barType == 'time' 
            ? <div className="bar" onClick={ this.timeHandle }>
                {
                  this.renderData.map(e => {
                    return (
                      <ul key={e.id}>
                        <li className="ulTitle">{ e.id }</li>
                        {
                          e.children.map( item => {
                            return (<li key={item} data-item-value={e.id + item}> { item } </li>)
                          } )
                        }
                      </ul>
                    )
                  })
                }
              </div>
            : <div className="tagList">
                <ul>
                  {
                    this.tagList.map(t => {
                      return <li key={t.id}> {t.name} </li>
                    })
                  }
                </ul>
              </div>
        }
      </div>
    )
  }
}
