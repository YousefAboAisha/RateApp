import axios from "axios";
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import classes from "./card.module.css";

const ClientCard = (props) => {
  const [likeIsClicked, setLikeIsClicked] = useState(false);
  const [dislikeIsClicked, setdislikeIsClicked] = useState(false);

  const thumpUp = (id, value) => {
    if (likeIsClicked) {
      setLikeIsClicked(false);
      value--;
    } else {
      setLikeIsClicked(true);
      value++;
    }

    axios
      .put(
        `https://rate-app-e4c05-default-rtdb.firebaseio.com/${props.db}/${id}/likes.json`,
        value
      )
      .then((res) => {
        console.log("Likes: ", res.data);
      });
  };

  const thumpDown = (id, value) => {
    if (dislikeIsClicked) {
      setdislikeIsClicked(false);
      value--;
    } else {
      setdislikeIsClicked(true);
      value++;
    }
    axios
      .put(
        `https://rate-app-e4c05-default-rtdb.firebaseio.com/${props.db}/${id}/dislikes.json`,
        value
      )
      .then((res) => {
        console.log("Dislikes: ", res.data);
      });
  };

  return (
    <Card className={classes.card} style={{ border: "none" }}>
      <Card.Img
        variant="top"
        src={props.img}
        style={{ width: "250px", height: "199.88px", margin: "5px auto" }}
      />
      <Card.Body>
        <div className={classes.header}>
          <span className={classes.first}>
            الاسم:
            <span style={{ color: "black", marginRight: "5px" }}>
              {props.name}
            </span>
          </span>
          <span className={classes.first}>
            الكلية:
            <span
              style={{ color: "black", marginRight: "5px", fontSize: "15px" }}
            >
              {props.section}
            </span>
          </span>
        </div>
        <Button
          style={{
            position: "absolute",
            backgroundColor: "teal",
            border: "none",
            fontSize: "17px",
            marginTop: "10px",
            bottom: "15px",
          }}
        >
          <a
            aria-hidden
            target="_blank"
            rel="noreferrer"
            href={props.site}
            style={{ color: "white", textDecoration: "none" }}
          >
            الملف الشخصي
          </a>
        </Button>
        <div className={classes.rate}>
          <i
            id="like"
            className={
              likeIsClicked
                ? `fas fa-thumbs-up ${classes.like}`
                : `fas fa-thumbs-up ${classes.default}`
            }
            onClick={() => thumpUp(props.id, props.likes)}
          >
            <span>{props.likes}</span>
          </i>
          <i
            id="dislike"
            className={
              dislikeIsClicked
                ? `fas fa-thumbs-down ${classes.dislike}`
                : `fas fa-thumbs-down ${classes.default}`
            }
            onClick={() => thumpDown(props.id, props.dislikes)}
          >
            <span>{props.dislikes}</span>
          </i>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ClientCard;
