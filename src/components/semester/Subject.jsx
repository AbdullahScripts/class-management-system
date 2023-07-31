import React from 'react'
import subjecPic from '../../assests/images/subjecPic.jpg'
import './subject.scss'
const Subject = ({data}) => {
  return (
    <div className="semester">
      <div className="card pb-2 p-1 card-sub">
        <img src={subjecPic} alt="foldr" />
        <div className="card-body">
          <h5 className="card-title"> subject</h5>
          <p className="card-text">{data.subject}</p>
        </div>
      </div>
    </div>
  )
}

export default Subject