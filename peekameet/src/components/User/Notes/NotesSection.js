import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import inputActions from '../../../redux/actions/inputActions';
import NoteItem from './NoteItem';
import { Link } from 'react-router-dom';
import './NotesSection.css';
import AddBtn from '../../../assets/images/userprofile/addnote.svg';
import { fetchUserNote } from '../../../redux/actions/asyncActions';

export const NotesSection = () => {
    const dispatch = useDispatch();
    
    const userNote = useSelector((state)=>state.asyncService.users);
    useEffect(() => {
      dispatch(fetchUserNote());
    // fetchUsers();
  },[] )
useEffect(()=>{
  if(userNote && userNote.data && userNote.data[0] && userNote.data[0].docs[0]){
    console.log("asdsdee", userNote.data[0].docs[0].dateTime);
    <NoteItem 
      content={userNote.data[0].docs[0].noteText}
            date = {userNote.data[0].docs[0].dateTime}
            time = {userNote.data[0].docs[0].dateTime}
    />
    }
}, [userNote.data])
  

    const notes = useSelector((state) => state.notes.notes);
  
    const onItemClicked = (item, index) => {
      dispatch(inputActions.setInputId(index));
      dispatch(inputActions.setInputContent(item.content));
      dispatch(inputActions.setInputDate(item.date));
      dispatch(inputActions.setInputTime(item.time));
    };

    const resetField = ()=>{
      dispatch(inputActions.resetInputs());
    }
  
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
              <Link  style={{ textDecoration: 'none' }} to="/usernote" className="addnotebtn" onClick={resetField}>Add Notes</Link>
              </div>
            </li>

            {/* <NoteItem 
              content={userNote && userNote.data && userNote.data[0] && userNote.data[0].docs[0] && console.log(userNote.data[0].docs[0].noteText)}
              date = {userNote && userNote.data && userNote.data[0] && userNote.data[0].docs[0] && userNote.data[0].docs[0].dateTime}
              time = {userNote && userNote.data && userNote.data[0] && userNote.data[0].docs[0] && userNote.data[0].docs[0].dateTime}
            /> */}
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
  