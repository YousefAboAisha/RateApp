import React from "react";
import classes from "./login.module.css";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    passwordError,
    loginHandler,
    hasAccount,
    setHasAccount,
    signUpHandler,
  } = props;

  return (
    <div className={classes.wrapper}>
      {hasAccount ? <h3>تسجيل الدخول</h3> : <h3>إنشاء حساب جديد</h3>}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="البريد الالكتروني"
        className={classes.input}
        autoFocus
      />
      <span className={classes.error}> {emailError} </span>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="كلمة المرور"
        className={classes.input}
      />
      <span className={classes.error}>{passwordError}</span>

      {hasAccount ? (
        <>
          <button className={classes.button} onClick={loginHandler}>
            سجّل الدُخول
          </button>
          إذا كنت لا تمتلك حساباً قم بـ
          <p onClick={() => setHasAccount(!hasAccount)}>إنشاء حساب جديد</p>
        </>
      ) : (
        <>
          <button className={classes.button} onClick={signUpHandler}>
            إنشاء
          </button>
          إذا كنت تمتلك حساباً قم بـ
          <p onClick={() => setHasAccount(!hasAccount)}>تسجيل الدخول</p>
        </>
      )}
    </div>
  );
};

export default Login;
