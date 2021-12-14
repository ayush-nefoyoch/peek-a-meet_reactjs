import React from 'react'
import { Link } from 'react-router-dom'
import { NotesSection } from '../../User/Notes/NotesSection';
import { UserHeader } from './UserHeader'
import './UserProfile.css';

export const Notes = () => {
    return (<>
        <UserHeader/>
        <div className="detailsNotes">
        <ul>
        <li>
            <Link to="/details" className="link">Details</Link>
        </li>
        <li>
            <Link to="/notes" className="link">Notes</Link>
        </li>
        </ul>
        </div>
        <div className="notesSection">
            {/* <h1>I am Notes section</h1> */}
            <NotesSection/>
            </div>
            </>
    )
}
