import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import './InputSection.style.scss';
// import noteActions from '../redux/actions/noteActions';
// import inputActions from '../redux/actions/inputActions';
import noteActions from "../../../redux/actions/noteActions";
import inputActions from "../../../redux/actions/inputActions";
import "./InputSection.css";
import { Link } from "react-router-dom";
import Arrow from "../../../assets/images/userprofile/arrow.svg";
import { saveNotes } from "../../../redux/actions/asyncActions";
import { fetchUserNote } from "../../../redux/actions/asyncActions";

export const InputSection = () => {
  const id = useSelector((state) => state.inputs.id);
  const time = useSelector((state) => state.inputs.time);
  const date = useSelector((state) => state.inputs.date);
  const content = useSelector((state) => state.inputs.content);
  const dispatch = useDispatch();

  const addNote = () => {
    if (content && date && time) {
      dispatch(
        noteActions.addNote({
          content,
          date,
          time,
        })
      );
      dispatch(saveNotes());
      dispatch(inputActions.resetInputs());
    } else {
      alert("fields should not empty");
    }
  };

  const updateNote = () => {
    // if(content){
    dispatch(
      noteActions.updateNote(id, {
        content,
        date,
        time,
      })
    );
    dispatch(inputActions.resetInputs());
    // }
  };

  const deleteNote = () => {
    dispatch(noteActions.deleteNote(id));
    dispatch(inputActions.resetInputs());
  };

  return (
    <>
      <div className="goback">
        <ul>
          <li>
            <img className="arrow" src={Arrow} />
            <Link
              className="mynotes"
              style={{ textDecoration: "none" }}
              to="/notes"
            >
              My Notes
            </Link>
          </li>
        </ul>
      </div>
      <div className="InputSection_container">
        <div className="dateTime">
          <label>Follow Up Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) =>
              dispatch(inputActions.setInputDate(e.target.value))
            }
          />
          <label>Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) =>
              dispatch(inputActions.setInputTime(e.target.value))
            }
          />
        </div>
        {/* <label>Notes</label> */}
        <textarea
          placeholder="Notes"
          value={content}
          onChange={(e) =>
            dispatch(inputActions.setInputContent(e.target.value))
          }
        ></textarea>
        <div className="InputSection__container__btnWrapper">
          <button
            type="button"
            className="mt-4 mr-4 mb-4 btn btn-outline-secondary cancel"
          >
            <Link to="/notes">Cancel</Link>
          </button>

          <button
            type="button"
            className="mt-4 mb-4 btn btn-success"
            onClick={id === -1 ? addNote : updateNote}
          >
            {id === -1 ? "ADD NOTE" : "UPDATE NOTE"}
          </button>
          {id !== -1 && (
            <button
              className="mt-4 mb-4 ml-2 btn btn-danger"
              onClick={deleteNote}
            >
              DELETE NOTE
            </button>
          )}
        </div>
      </div>
    </>
  );
};
