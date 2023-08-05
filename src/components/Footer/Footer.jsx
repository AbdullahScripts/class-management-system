import React, { useEffect, useState } from 'react'
// for date & time
import dayjs from 'dayjs'

import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";

import './footer.scss'


const Footer = () => {

const [currentDate,setCurrentDate]=useState('12')

useEffect(()=>{

    setCurrentDate(dayjs().format('YYYY'))

},[])

    return (
      
                    // <div className="text-center p-1 text-white bg-primary" > <h5 className='pt-3'>&copy; {currentDate} All RIgths reserved by Dev.Mirxa</h5> </div>
                  
                    
                    <footer className="footer">
                    <div className="footer-content">
                      <div className="col">
                        <div className="title">About</div>
                        <div className="text">
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, nam
                          rerum? Vitae sunt enim qui impedit libero voluptatibus tempora
                          exercitationem corporis ad voluptatum, repellendus ex?
                        </div>
                      </div>
                      <div className="col">
                        <div className="title">Contact</div>
                        <div className="c-item">
                          <FaLocationArrow />
                          <div className="text">Pakistan,Punjab,Faisalabad,Chak jhumra</div>
                        </div>
                        <div className="c-item">
                          <FaMobileAlt />
                          <div className="text">+92 344 63 39 ***</div>
                        </div>
                        <div className="c-item">
                          <FaEnvelope />
                          <div className="text">Email:abdullahboota11222@gmail.com</div>
                        </div>
                      </div>
                      {/* <div className="col">
                        <div className="title">Categories</div>
                        <span className="text">Head phone</span>
                        <span className="text">Smart Watch</span>
                        <span className="text">Bluthoth Spaker</span>
                        <span className="text">Wireless Airbuds</span>
                        <span className="text">Home theatre</span>
                        <span className="text">Projectors</span>
                      </div> */}
                      <div className="col">
                        <div className="title">Pages</div>
                        <span className="text">Home</span>
                        <span className="text">About</span>
                        <span className="text">Privacy&Policy</span>
                        {/* <span className="text">Returns</span> */}
                        <span className="text">Term & Conditions</span>
                        <span className="text">Contact Us</span>
                      </div>
                    </div>
                    <div className="bottom-bar">
                      <div className="bottom-bar-content">
                          <div className="text">
                              &copy; all Right reserved by Labayik E.Commerce
                          </div>
                          {/* <img src={Payment} alt="" /> */}
                          <p className='pt-3'>&copy; {currentDate} All RIgths reserved by Dev.Mirxa</p> 
                      </div>
                    </div>
                  </footer>

          
    )
}

export default Footer