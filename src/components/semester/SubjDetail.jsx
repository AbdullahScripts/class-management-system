import React, { useContext } from "react";
import Detail from "./Detail";
import { Context } from "../../contexts/mainContext";
import Loader from "../../pages/loader/Loader";
const SubjDetail = () => {
  const { subDetail } = useContext(Context);

  if (!subDetail) return <Loader />;
  else
    return (
      <div className="container-fluid main-contact  ">
        <div className="row">
          <div className="col mb-5 mt-5">
            <div class="card-notice">
              <div class="bg">
                <h1 className="text-center text-primary">Subject Detail</h1>
                <hr />

                {subDetail?.map((det, i) => {
                  return <Detail det={det} key={i} />;
                })}
              </div>
              <div class="blob"></div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SubjDetail;
