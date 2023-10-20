import React from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";

export default function Topbar(props) {
  return (
    <div className="topbar">
      <div className="topbarLeft">
        <h1 className="logo">TuZu</h1>
      </div>
      <div className="topbarCenter">
        <span>{props.titleCenter}</span>
      </div>
      <div className="topbarRight">
        {props.linkRight ? (
          <Link
            to={props.linkRight}
            style={{ textDecoration: "none", color: "white" }}
          >
            <span>{props.titleRight}</span>
          </Link>
        ) : (
          <span>{props.titleRight}</span>
        )}
      </div>
    </div>
  );
}
