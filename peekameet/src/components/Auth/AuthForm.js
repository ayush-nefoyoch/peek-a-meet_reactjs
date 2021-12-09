import { useState, useRef, useContext } from "react";
import AuthContext from "../../store/AuthProvider";
import { useNavigate } from "react-router-dom";
import "./Signin.css";
// import {LOGIN_API} from '../../assets/library/Constant';

const AuthForm = () => {
  const [emailError, setEmailError] = useState({});
  const [passwordError, setPasswordError] = useState({});
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

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
      setIsLoading(true);
      const url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDsdcPSmle-DK7F1UQ6WKZ8FlJAnTuqw_s";
      // const url = `${LOGIN_API}`;
      fetch(url, {
        method: "POST",
        body: JSON.stringify({  
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          setIsLoading(false);
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = "Authentication Failed!";
              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          const expirationTime = new Date(
            new Date().getTime() + +data.expiresIn * 1000
          );
          authCtx.login(data.idToken, expirationTime); // set token
          authCtx.getData(data);
          // console.log(authCtx.userData)
          navigate("/profile");
        })
        .catch((err) => {
          alert(err.message);
        });
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
            required
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
            required
          />
        </div>
        {passwordError && <div>{passwordError.msg}</div>}
        <div>
          {!isLoading && (
            <button className="btn btn-default submit">Login</button>
          )}
          {isLoading && <p>Sending Request...</p>}
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
