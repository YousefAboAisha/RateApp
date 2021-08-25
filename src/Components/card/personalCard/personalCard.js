import React from "react";
import "./personalCard.css";

const personalCard = (props) => {
  return (
    <div className="our-team">
      <div className="picture">
        <img className="img-fluid" src={props.img} alt="faw" />
      </div>

      <div className="team-content">
        <h3 className="name">{props.name}</h3>
        <h4 className="title">{props.title}</h4>
      </div>

      <ul className="social">
        <li>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.facebook.com/yousef.aboesha.9/"
            className="fa fa-facebook"
          >
            {" "}
          </a>
        </li>

        <li>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://twitter.com/_abuAisha"
            className="fa fa-twitter"
          >
            {" "}
          </a>
        </li>

        <li>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/YousefAboAisha"
            className="fa fa-github"
          >
            {" "}
          </a>
        </li>

        <li>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/yousef-aboesha-9b40b4193/"
            className="fa fa-linkedin"
          >
            {" "}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default personalCard;
