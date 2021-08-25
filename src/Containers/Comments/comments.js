import React, { useEffect, useState } from "react";
import classes from "./comments.module.css";
import Comment from "../../Components/comment/comment";
import axios from "axios";
import Spinner from "../../Components/Ui/spinner/spinner";

const Comments = () => {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState("false");
  const [fetchedComments, setFetchedComments] = useState([]);

  const clearInput = () => {
    setComment("");
  };

  const commentHandler = (e) => {
    e.preventDefault();
    clearInput();
    setLoading(true);

    const date =
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();

    const data = { comment, date };

    axios
      .post(
        "https://rate-app-e4c05-default-rtdb.firebaseio.com/Comments.json",
        data
      )
      .then((res) => {
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    axios
      .get("https://rate-app-e4c05-default-rtdb.firebaseio.com/Comments.json")
      .then((res) => {
        const fetchedData = [];
        for (let key in res.data) {
          fetchedData.push(res.data[key]);
        }
        setFetchedComments(fetchedData);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [fetchedComments]);

  let message = (
    <>
      {fetchedComments.map((elem) => {
        return <Comment key={elem.date} msg={elem.comment} date={elem.date} />;
      })}
    </>
  );

  if (loading) {
    message = <Spinner />;
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.img}></div>
      <h2 className={classes.heading}>الآراء والتعليقات</h2>
      <div className={classes.box}>
        <textarea
          placeholder=" أضف تعليقاً ( قول إلي في نفسك فش حدا عارف مين أنت )"
          rows="4"
          autoFocus
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <div className={classes.btn}>
          <button onClick={clearInput}>إلغاء</button>
          <button
            disabled={comment.trim() === "" ? true : false}
            onClick={commentHandler}
          >
            تعليق
          </button>
        </div>
        {message}
      </div>
    </div>
  );
};

export default Comments;
