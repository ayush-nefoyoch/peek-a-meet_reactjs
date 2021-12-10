import { useState, useRef, useContext } from "react";
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

    console.log("enterre", authCtx.data);

    if (enteredEmail.trim().length === 0) {
      console.log("123", enteredEmail);
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
      authCtx.login(600000);
      navigate("/profile");
    } else {
      alert("Invalid email and password!");
    }
  };

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
