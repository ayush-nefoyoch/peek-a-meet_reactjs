import React from 'react'
import { Link } from 'react-router-dom'
import { UserHeader } from './UserHeader'
import './UserProfile.css';

export const Notes = () => {
    return (
        <div>
        <UserHeader/>
        <ul>
        <li>
            <Link to="/details" className="link">Details</Link>
        </li>
        <li>
            <Link to="/notes" className="link">Notes</Link>
        </li>
        </ul>
        <div className="notesSection">
            <h1>I am Notes section</h1>
            </div>
        </div>
    )
}
