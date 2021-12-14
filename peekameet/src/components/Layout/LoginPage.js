import React from "react";
import signin from "../../assets/images/signin.png";
import AuthForm from "../Auth/AuthForm";
import "../Auth/Signin.css";

export const LoginPage = () => {
  return (
    <>
      <div className="firstContainer">
        <div className="centerContainer">
          <div className="card mb-3 mt-3 first">
            <div className="row no-gutters">
              <div className="col-md-6 signinImage">
                <img src={signin} className="signinImage" alt="..." />
              </div>
              <div className="col-md-6">
                <div className="card-body mt-3">
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
                <AuthForm />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};
