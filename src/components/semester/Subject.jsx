import React, { useContext } from 'react'
import subjecPic from '../../assests/images/subjecPic.jpg'
import './subject.scss'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../contexts/mainContext'


const Subject = ({data}) => {
  

const navigate=useNavigate()


// { Physics: ['physics_book1.pdf', 'physics_book2.pdf'] }

const subjectObject = data;

const subjectName = Object.keys(subjectObject)[0];
const values = Object.keys(subjectObject).map(key => subjectObject[key]);

const mergedArray = [].concat(...values);


const {setSubDetail}=useContext(Context) 

const setPdfs=()=>{

  setSubDetail(mergedArray)
  navigate('/subjDetail')

}




  return (
   
    <div className="semester">
      <div className="card pb-2 p-1 card-sub">
        <img src={subjecPic} alt="foldr" />
        <div className="card-body p-4">
          <h5 className="card-title"> subject</h5>
          <p className="card-text">{subjectName}</p>
        </div>
        <button className='button-sub' onClick={setPdfs} >
    Detail
</button >
      </div>
    </div>
  )
}

export default Subject