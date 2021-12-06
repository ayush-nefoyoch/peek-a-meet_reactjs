import React from "react";
import "./Signin.css";
import signin from "../../assets/images/signin.png";

export const Signin = () => {
  return (
    <>
      <div className="firstContainer">
        <nav class="navbar">
          <a class="navbar-brand" href="https://reactjs.org">
            <img
              src="/docs/4.0/assets/brand/bootstrap-solid.svg"
              width="30"
              height="30"
              className="d-inline-block align-top logoTxt"
              alt=""
            />
            PEEKaMEET
          </a>
          <div className="navItems">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/signin">
                  Sign In <span className="sr-only">(current)</span>
                </a>
              </li>
              <li>
                <a className="nav-link" href="/signin">
                  Sign Up <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="centerContainer">
          <div className="card mb-3 mt-3 first">
            <div className="row no-gutters">
              <div className="col-md-6 signinImage">
                <img src={signin} className="signinImage" alt="..." />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">
                    <span className="text-style-1">PEEKaMEET </span>lets you
                    network more effectively to achieve your business and career
                    goals
                  </h5>
                  <div className="card-text pb-3 radiusSection">
                    <span className="freelancer">Freelancer</span>
                    <span className="job">Job Seeker</span>
                    <span className="entrepreneur">Entrepreneur</span>
                    <span className="mompreneur">Mompreneur</span>
                    <br />
                    <br />
                    <span className="intern">Internship Seeker</span>
                    <span className="environment">
                      Environmental Change Maker
                    </span>
                  </div>
                  <p className="card-text buildText">
                    Build and manage your network with PEEKaMEET
                  </p>
                </div>

                <form action="/action_page.php">
                  <div class="form-group">
                    <label for="email" className="Email">
                      Email
                    </label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div class="form-group">
                    <label for="pwd" className="password">
                      Password:
                    </label>
                    <input type="password" className="form-control" id="pwd" />
                  </div>
                  <button type="submit" className="btn btn-default submit">
                    Sign In
                  </button>
                  <div class="checkbox">
                    <label>
                      <input type="checkbox" /> Remember me
                    </label>
                    <span className="forgot">Forgot Password</span>
                  </div>
                  <div class="signup">
                    <p>
                      Don’t have an account?{" "}
                      <span className="signupLine">Sign Up</span>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
