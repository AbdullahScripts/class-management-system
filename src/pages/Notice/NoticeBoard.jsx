import React from "react";

import "./noticeBoard.scss";
import Ananouncment from "./Ananouncment";
const NoticeBoard = () => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col mb-5 mt-5">
          <div class="card">
            <div class="bg">
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
