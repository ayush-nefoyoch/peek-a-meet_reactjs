import { Link } from "react-router-dom";
import AuthContext from "../../store/AuthProvider";
import { useContext } from "react";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () => {
    authCtx.logout();
  };
  console.log(isLoggedIn);
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>
          <img
            src="https://www.google.com/maps/uv?pb=!1s0x876c79a819d22f3f%3A0xea5c987e2ffab288!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPfNnU-wxHbHWpLbcBzpfRRLemnOxwQdsZme-fQ%3Dw160-h160-k-no!5speekameet%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipPfNnU-wxHbHWpLbcBzpfRRLemnOxwQdsZme-fQ&hl=en&sa=X&sqi=2&ved=2ahUKEwjVlfPKxM70AhVGzqQKHRTAD1AQoip6BAg7EAM#"
            alt="logo"
          />
          PEEKaMEET
        </div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/auth" className={classes.signup}>
                Sign In
              </Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
