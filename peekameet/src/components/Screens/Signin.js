import React from "react";
import './Signin.css';


export const Signin = () => {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="https://reactjs.org">
          <img
            src="/docs/4.0/assets/brand/bootstrap-solid.svg"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
          />
          Bootstrap
        </a>

        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/signin">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="centerContainer">
      <div className="card mb-3 mt-3 first">
          <div className="row no-gutters">
            <div className="col-md-6">
              <img src="" alt="..." />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">Lifecycle of Components</h5>
                <p className="card-text pb-3">
                  Each component in React has a lifecycle which you can monitor
                  and manipulate during its three main phases.
                  <br />
                  <br />
                  The three main phases are:
                  <ul className="pb-2">
                    <li>Mounting</li>
                    <li>Updating</li>
                    <li>UnMounting</li>
                  </ul>
                  {/* Mounting, Updating, and Unmounting. */}
                </p>
                {/* <p class="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  );
};
