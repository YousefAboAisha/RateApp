import React from "react";
import classes from "./reviewbar.module.css";
import { NavLink } from "react-router-dom";

const Reviewbar = () => {
  return (
    <div>
      <ul className={classes.nav}>
        <li>
          <NavLink to="/review/engineering" activeClassName={classes.active}>
            كلية الهندسة
          </NavLink>
        </li>
        <li>
          <NavLink to="/review/medical" activeClassName={classes.active}>
            كلية الطب
          </NavLink>
        </li>
        <li>
          <NavLink to="/review/pharmacy" activeClassName={classes.active}>
            كلية الصيدلة
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Reviewbar;
