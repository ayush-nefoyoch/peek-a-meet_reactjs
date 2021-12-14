import React from 'react';
import { Link } from 'react-router-dom';
import { UserHeader } from './UserHeader';
import './UserProfile.css';
import './UserHeader.css';
import { UserDetails } from '../../User/UserDetails';

export const Details = () => {
    return (
        <div>
            <UserHeader/>
            <ul>
            <div className="detailsSection">
            <li>
              <Link to="/details" className="link">Details</Link>
            </li>
            <li>
              <Link to="/notes" className="link">Notes</Link>
            </li>
            </div>
            </ul>
            <UserDetails/>
            <hr/>
        </div>
    )
}
