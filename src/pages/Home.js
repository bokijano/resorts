import React from "react";
import Kopaonik from "./../images/kopaonik.jpg";
import Zlatibor from "./../images/zlatibor.jpg";
import OldMountain from "./../images/staraPlanina.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import ResortWrapper from "./../components/ResortWrapper.js";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <ResortWrapper className="col-11 mx-auto my-auto">
      <h1>spend the most wonderful moments in the mountains of serbia</h1>
      <div style={{ marginTop: "50px" }} className="container">
        <div className="row">
          <div className="card col-sm-12 col-lg-4 img-container">
            <img src={Kopaonik} alt="kopaonik" className="img-fluid img-card" />
            <Link to="/kopaonik">
              <button className="btn btn-primary btn-display">Kopaonik</button>
            </Link>
          </div>
          <div className="card col-sm-12 col-lg-4 img-container">
            <img src={Zlatibor} alt="zlatibor" className="img-fluid img-card" />
            <Link to="/zlatibor">
              <button className="btn btn-primary btn-display">Zlatibor</button>
            </Link>
          </div>
          <div className="card col-sm-12 col-lg-4 img-container">
            <img
              src={OldMountain}
              alt="old mountain"
              className="img-fluid img-card"
            />
            <Link to="/staraPlanina">
              <button className="btn btn-primary btn-display">
                Stara planina
              </button>
            </Link>
          </div>
        </div>
      </div>
    </ResortWrapper>
  );
}
