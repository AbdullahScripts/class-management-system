import React from "react";

import "./noticeBoard.scss";
import Ananouncment from "./Ananouncment";
const NoticeBoard = () => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col mb-5 mt-5">
          <div class="card-notice">
          
            <div class="bg">
            <h1 className="text-center text-primary" >Notice Board</h1>
              <Ananouncment />
              <Ananouncment />
              <Ananouncment />
              <Ananouncment />
              <Ananouncment />
            </div>
            <div class="blob"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
