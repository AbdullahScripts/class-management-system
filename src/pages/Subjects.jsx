import React, { useContext } from "react";
import { Context } from "../contexts/mainContext";
import Subject from "../components/semester/Subject";
import { useNavigate } from "react-router-dom";
import Loader from "./loader/Loader";


const Subjects = () => {

const navigate=useNavigate()

const {sub}=useContext(Context)

if(!sub) return <Loader/>


//   [
//     { Physics: ['physics_book1.pdf', 'physics_book2.pdf'] },
//     { Chemistry: ['chemistry_book1.pdf', 'chemistry_book2.pdf'] },
//     { Math: ['math_book1.pdf', 'math_book2.pdf'] },
//     // Add more subjects and books as needed
// ],



 else{ return (
    <div className="container-fluid main-contact ">
        <div className="row d-flex justify-content-center ">
          {sub.map((item, i) => {
            return (
              <div key={i} className="col-md-3 m-2">
                <Subject data={item} />
              </div>
            );
          })}
        </div>
        <div className="row d-flex justify-content-center">
        <button class="learn-more" onClick={()=>navigate('/')} >
          <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text">Back to</span>
        </button>
        </div>
      </div>
  );}
};

export default Subjects;
