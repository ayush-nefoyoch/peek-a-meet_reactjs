import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import inputActions from '../../../redux/actions/inputActions';
import NoteItem from './NoteItem';
import { Link } from 'react-router-dom';
import './NotesSection.css';
import AddBtn from '../../../assets/images/userprofile/addnote.svg';

export const NotesSection = () => {
    const dispatch = useDispatch();
    const notes = useSelector((state) => state.notes.notes);
  
    const onItemClicked = (item, index) => {
      dispatch(inputActions.setInputId(index));
      dispatch(inputActions.setInputContent(item.content));
      dispatch(inputActions.setInputDate(item.date));
      dispatch(inputActions.setInputTime(item.time));
    };
  
    // if (notes.length === 0) {
    //   return (
    //     <div className="NotesSection__container__empty">
    //       <p>There is no note yet. Please add</p>
    //     </div>
    //   );
    // }
    return (
      <div className="NotesSection__container">
      <li>
      <div className="addbtnSection">
      <img src={AddBtn}/>
              <Link  style={{ textDecoration: 'none' }} to="/usernote" className="addnotebtn">Add Notes</Link>
              </div>
            </li>
        {notes.map((item, index) => {
          if (item) {
            return (
              <NoteItem
                content={item.content}
                date = {item.date}
                time = {item.time}
                onItemClicked={() => {
                  onItemClicked(item, index);
                }}
              />
            );
          }
          return null;
        })}
      </div>
    );
  };
  