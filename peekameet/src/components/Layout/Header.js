import React from 'react'

export const Header = () => {
    return (
        <div>
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
        </div>
    )
}
