import side from "../assets/side.svg";
import { useState } from "react";
import "./Card2.css";
import cross from '../assets/cross.svg'

const Side2 = () => {
  const [isSide, setIsSide] = useState(true);
  const toggle = () => {
    return setIsSide(!isSide);
  };
  let ans;
  if (isSide) {
    ans = (
      <button onClick={toggle} className="
      one">
        <a><img className="border-0" src={side} alt="" /></a>

      </button>
    );
  } else {
    ans = (

        <ul style={{ listStyleType: "disc" }}>
          <li className="fw-bold pb-2">Explore the world of management</li>
          <li>Technical Project Management</li>
          <li>Threadbuild</li>
          <li>Structure your pointers</li>
          <li>4SA Method</li>
        </ul>

    );
  }
  return (
    <div
      className="card"
      style={{ height: "692px", width: isSide ? "132px" : "392px", position:"absolute", top:"0px" ,left:"0px" }}
    >
      <div
        className="card-header bg-dark text-light lablee "
        style={{ height: "50px" }}
      >
        {isSide ? (
          ""
        ) : (
          <div className="d-flex justify-content-between">
            Journey Board{" "}
            <img className="cross" onClick={toggle} src={cross} alt="" />
          </div>
        )}
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{ans}</li>
      </ul>
    </div>
  );
};
export default Side2;
