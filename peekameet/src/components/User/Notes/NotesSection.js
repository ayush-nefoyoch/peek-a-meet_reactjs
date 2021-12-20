import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import inputActions from "../../../redux/actions/inputActions";
import NoteItem from "./NoteItem";
import { Link } from "react-router-dom";
import "./NotesSection.css";
import AddBtn from "../../../assets/images/userprofile/addnote.svg";
import { fetchUserNote } from "../../../redux/actions/asyncActions";
import InfiniteScroll from "react-infinite-scroll-component";

export const NotesSection = () => {
  const dispatch = useDispatch();
  const userNote = useSelector((state) => state.asyncService.users);
  useEffect(() => {
    dispatch(fetchUserNote());
  }, []);
  useEffect(() => {
    if (
      userNote &&
      userNote.data &&
      userNote.data[0] &&
      userNote.data[0].docs[0]
    ) {
      // console.log("data", userNote.data[0].docs[0].dateTime);
      <NoteItem
        content={userNote.data[0].docs[0].noteText}
        date={userNote.data[0].docs[0].dateTime}
        time={userNote.data[0].docs[0].dateTime}
      />;
    }
  }, [userNote.data]);

  const notesList = useSelector((state) => state.notes.notes);

  const onItemClicked = (item, index) => {
    dispatch(inputActions.setInputId(index));
    dispatch(inputActions.setInputContent(item.content));
    dispatch(inputActions.setInputDate(item.date));
    dispatch(inputActions.setInputTime(item.time));
  };

  const resetField = () => {
    dispatch(inputActions.resetInputs());
  };

  let len = notesList.length; 
  const initial = {
    items: notesList.slice(0, 2),
    hasMore: true,
    pageCount: 1,
  };
  const [state, setState] = useState(initial);

  const fetchData = () => {
    if (initial.items.length * state.pageCount === notesList.length) {
      setState((prevState) => ({
        ...prevState,
        hasMore: false,
      }));
      return;
    }
    setTimeout(() => {
      setState((prevState) => ({
        ...prevState,
        items: state.items.concat(
          notesList.slice(state.pageCount * 2, state.pageCount * 2 + 2)
        ),
        pageCount: state.pageCount + 1,
      }));
    }, 500);
  };

  if (notesList.length === 0) {
    return (
      <div className="NotesSection__container__empty">
        <p>There is no note yet. Please add</p>
        <li>
          <div className="addbtnSection">
            <img src={AddBtn} />
            <Link
              style={{ textDecoration: "none" }}
              to="/usernote"
              className="addnotebtn"
              onClick={resetField}
            >
              Add Notes
            </Link>
          </div>
        </li>
      </div>
    );
  }

  return (
    <div className="NotesSection__container">
      <li>
        <div className="addbtnSection">
          <img src={AddBtn} />
          <Link
            style={{ textDecoration: "none" }}
            to="/usernote"
            className="addnotebtn"
            onClick={resetField}
          >
            Add Notes
          </Link>
        </div>
      </li>
      <InfiniteScroll
        dataLength={state.items.length}
        next={fetchData}
        hasMore={state.hasMore}
        loader={<h3>Loading...</h3>}
        endMessage={<h4>Yay! You have seen it all</h4>}
      >
        {state.items.map((item, index) => {
          if (item) {
            return (
              <NoteItem
                content={item.content}
                date={item.date}
                time={item.time}
                onItemClicked={() => {
                  onItemClicked(item, index);
                }}
              />
            );
          }
          return null;
        })}
      </InfiniteScroll>
    </div>
  );
};
