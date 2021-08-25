import React from "react";
import classes from "./review.module.css";
import { Route, Switch } from "react-router-dom";
import Engineering from "../Colleges/Engineering/engineering";
import Medical from "../Colleges/Medical/medical";
import Pharmacy from "../Colleges/Pharmacy/pharmacy";
import Reviewbar from "../../Components/Ui/reviewbar/reviewbar";

const Review = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.img}>
        <div>
          <span>مرحباً بكم في صفحة التقييم </span>
        </div>
      </div>
      <Reviewbar />
      <Switch>
        <Route path="/review/engineering" component={Engineering} />
        <Route path="/review/medical" component={Medical} />
        <Route path="/review/pharmacy" component={Pharmacy} />
      </Switch>
    </div>
  );
};

export default Review;
