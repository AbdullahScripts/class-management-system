import React from 'react'
import imgPdf from '../../assests/images/pdf.png'
import './detail.scss'
const Detail = () => {
  return (
  
  <div className="row m-5 ">
    <div className="col-md-4">
      <img src={imgPdf} className="img-fluid rounded-start" alt="PDF" width={300}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        <button className="Btn-pdf">
   <svg className="svgIcon" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>
   <span className="icon2"></span>
   <span className="tooltip">Download</span>
</button>
      </div>
    </div>
  </div>

  )
}

export default Detail