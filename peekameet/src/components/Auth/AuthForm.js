import { useState, useRef, useContext, useEffect } from "react";
import AuthContext from "../../store/AuthProvider";
import { useNavigate } from "react-router-dom";
import "./Signin.css";

const AuthForm = () => {
  const [emailError, setEmailError] = useState({});
  const [passwordError, setPasswordError] = useState({});
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    if (enteredEmail.trim().length === 0) {
      setEmailError({
        title: "Invalid Input",
        msg: "Please enter valid email(non-empty value.)",
      });
      return;
    }
    if (enteredPassword.trim().length === 0) {
      setPasswordError({
        title: "Invalid Input",
        msg: "password (non-empty value.)",
      });
      return;
    }
    if (enteredPassword.trim().length < 8) {
      setPasswordError({
        title: "Invalid Password",
        msg: "Password must be of 8 charcaters!",
      });
      return;
    }
    const check = enteredPassword.match(/\d+/g);
    if (check === null) {
      setPasswordError({
        title: "Invalid Password",
        msg: "Password must contain a number!",
      });
      return;
    }
    if (
      enteredEmail === "bhagyashree.srivastava@daffodilsw.com" &&
      enteredPassword === "Hrhk@1234"
    ) {
      authCtx.getAPIData(enteredEmail, enteredPassword);
      // console.log("direct after api call ",authCtx.getData)
      // authCtx.login(600000);
    } else {
      alert("Invalid email and password!");
    }
  };
  useEffect(() => {
    if (authCtx.userData && authCtx.userData.data && authCtx.userData.data[0]) {
      console.log(authCtx.userData.data[0].token);
      authCtx.login(authCtx.userData.data[0].token, 600000);
      navigate("/profile");
    }
  }, [authCtx.userData]);

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="email" className="Email">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            ref={emailInputRef}
          />
        </div>
        {emailError && <div>{emailError.msg}</div>}
        <div className="form-group">
          <label htmlFor="pwd" className="password">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            ref={passwordInputRef}
          />
        </div>
        {passwordError && <div>{passwordError.msg}</div>}
        <div>
          <button type="submit" className="btn btn-default submit">
            Login
          </button>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <span className="forgot">Forgot Password</span>
        </div>
        <div className="signup">
          <p>
            Don’t have an account? <span className="signupLine">Sign Up</span>
          </p>
        </div>
      </form>
    </>
  );
};

export default AuthForm;
