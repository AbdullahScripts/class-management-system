import React, { useEffect, useState } from "react";
import imgPdf from "../../assests/images/pdf.png";
import "./detail.scss";
import cv from "../../assests/pdf/mycv.pdf";
import acha from "../../assests/pdf/acha.pdf";
// import ok from "../../assests/pdf/ok.pdf";

const Detail = ({ det }) => {
  const pdfs = [{ "physics_book1":  cv  }, { "physics_book2":  acha  }];
const [book,setBook]=useState('')

const printPdf=()=>{

  const keyToFind = det;

const physics_book2_value = pdfs.find(obj => obj.hasOwnProperty(keyToFind))[keyToFind];

setBook(physics_book2_value)

}

useEffect(printPdf,[])

  return (
    <div className="row m-5 ">
      <div className="col-md-4">
        <img
          src={imgPdf}
          className="img-fluid rounded-start"
          alt="PDF"
          width={300}
        />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">helping material</h5>
          <p className="card-text">{det}</p>

          <a href={book} className="btn-rounded btn btn-outline-primary mt-4">
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default Detail;
