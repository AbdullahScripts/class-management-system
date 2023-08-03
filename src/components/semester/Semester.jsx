import React, { useContext } from "react";
import "./semester.scss";
import folder from "../../assests/images/folder.jpg";
import { useNavigate } from "react-router-dom";
import {Context} from '../../contexts/mainContext'

const Semester = ({ num,data }) => {

const navigate=useNavigate()
  
const {setSub}=useContext(Context)

const setSubject=()=>{
setSub(data)
navigate('/Subjects')
}

return (
    <div className="semester">
      <div className="card pb-2 p-1 card-sem">
       <img src={folder} alt="foldr" />
        <div className="card-body p-4">
          <h5 className="card-title">{num+1} semester</h5>
          <p className="card-text">{data[0].subject}</p>
        </div>
    
     <button class="learn-more" onClick={setSubject} >
          <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text">Learn More</span>
        </button>
   
      </div>
    </div>
  );
};

export default Semester;
