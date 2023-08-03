import React from 'react'
import subjecPic from '../../assests/images/subjecPic.jpg'
import './subject.scss'
import { useNavigate } from 'react-router-dom'
const Subject = ({data}) => {

const navigate=useNavigate()

  return (
    <div className="semester">
      <div className="card pb-2 p-1 card-sub">
        <img src={subjecPic} alt="foldr" />
        <div className="card-body p-4">
          <h5 className="card-title"> subject</h5>
          <p className="card-text">{data.subject}</p>
        </div>
        <button className='button-sub' onClick={()=>navigate('/subjDetail')} >
    Detail
</button >
      </div>
    </div>
  )
}

export default Subject