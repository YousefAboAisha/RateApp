import React, { useState, useEffect } from "react";
import Navbar from "./Components/Ui/navbar/Navbar";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Home from "./Containers/home/Home";
import Review from "./Containers/review/review";
import Comments from "./Containers/Comments/comments";
import Login from "./Containers/login/login";
import Footer from "./Components/Ui/Footer/Footer";
import fire from "./firebase/firebase";

function App(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [user, setUser] = useState(null);

  const clearFileds = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setPasswordError("");
    setEmailError("");
  };

  const loginHandler = (e) => {
    console.log("User= ", user);
    e.preventDefault();
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(error.message);
            break;

          case "auth/wrong-password":
            setPasswordError(error.message);
            break;

          default:
            return null;
        }
      });
  };

  const signUpHandler = (e) => {
    e.preventDefault();
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(error.message);
            break;
          case "auth/weak-password":
            setPasswordError(error.message);
            break;

          default:
            return null;
        }
      });
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearFileds();
        setUser(user);
        <Redirect exact to="/home" />;
      }
    });
  };

  useEffect(() => {
    authListener();
    return {};
  }, []);

  let routs = <Switch> {!user ? <Redirect exact to="/login" /> : null}</Switch>;

  if (user) {
    routs = (
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/review" component={Review} />
        <Route path="/comments" component={Comments} />
        <Redirect exact to="/home" />
      </Switch>
    );
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar user={user} setUser={setUser} />
        {!user ? (
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            emailError={emailError}
            passwordError={passwordError}
            loginHandler={loginHandler}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            signUpHandler={signUpHandler}
          />
        ) : null}

        {routs}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
