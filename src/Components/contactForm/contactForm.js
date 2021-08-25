import React, { useState } from "react";
import "./contactForm.css";
import contactImg from "../../Photos/contact2.svg";
import axios from "axios";
import Spinner from "../Ui/spinner/spinner";

const ContactForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const topicHandler = (e) => {
    setTopic(e.target.value);
  };

  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const loadHandler = (value) => {
    setLoading(value);
  };

  const clearInputs = () => {
    setEmail("");
    setName("");
    setTopic("");
    setMessage("");
  };

  const ClickHandler = (e) => {
    e.preventDefault();
    loadHandler("true");

    let data = {
      Name: name,
      Email: email,
      Topic: topic,
      Message: message,
    };

    axios
      .post(
        "https://rate-app-e4c05-default-rtdb.firebaseio.com/Messages.json",
        data
      )
      .then((res) => {
        loadHandler("false");
        clearInputs();
      })
      .catch((err) => {
        console.log(err);
        loadHandler("false");
      });
  };

  let contactForm = null;

  if (loading === "true") {
    contactForm = <Spinner />;
  } else {
    contactForm = (
      <div className="wrapper">
        <form className="right" onSubmit={ClickHandler}>
          <div className="input">
            <input
              type="text"
              placeholder="الاسم"
              value={name}
              onChange={nameHandler}
              name="name"
              required
            />
          </div>
          <div className="input">
            <input
              type="email"
              placeholder="البريد الالكتروني"
              value={email}
              onChange={emailHandler}
              name="email"
              required
            />
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="الموضوع"
              value={topic}
              onChange={topicHandler}
              name="topic"
              required
            />
          </div>
          <div className="input">
            <textarea
              placeholder="الرسالة"
              rows="5"
              value={message}
              onChange={messageHandler}
              name="message"
              required
            />
          </div>
          <button>إرسال</button>
        </form>

        <div className="left">
          <img src={contactImg} alt="Faw" />
        </div>
      </div>
    );
  }

  return <div>{contactForm}</div>;
};

export default ContactForm;
