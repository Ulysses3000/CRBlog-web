import React from 'react'
import "./bookmark.styl"

export default class TheGalaxy extends React.Component {
    render () {
        return (
            <div className='bookmark'>
                <style type="stylus" jsx>{`
                    .box1 {
                        background: #ccc;
                        width: 100px;
                        height: 100px;
                    }
                `}
                </style>
                <div>
                    <div>
                        <div className="box1"></div>
                        <div className="box2"></div>
                        <div className="box3"></div>
                        <div className="box4"></div>
                        <div className="box5"></div>
                        <div className="box6"></div>
                    </div>
                </div>
            </div>
        )
    }
}