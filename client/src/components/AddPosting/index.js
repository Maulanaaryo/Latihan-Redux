import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPosting,
  getPosting,
  updatePosting,
} from "../../actions/PostingAction";

function AddPosting() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posting, setPosting] = useState(0);
  const [id, setId] = useState("");

  const { addPostingResult, detailPostingResult, updatePostingResult } =
    useSelector((state) => state.PostingReducer);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (id) {
      dispatch(
        updatePosting({
          id: id,
          title: title,
          content: content,
          posting: posting,
        })
      );
    } else {
      dispatch(
        addPosting({ title: title, content: content, posting: posting })
      );
    }
  };

  useEffect(() => {
    if (addPostingResult) {
      dispatch(getPosting());
      setTitle("");
      setContent("");
      setPosting(0);
    }
  }, [addPostingResult, dispatch]);

  useEffect(() => {
    if (detailPostingResult) {
      console.log("Masuk ke detail");
      setTitle(detailPostingResult.title);
      setContent(detailPostingResult.content);
      setPosting(detailPostingResult.posting);
      setId(detailPostingResult.id);
    }
  }, [detailPostingResult, dispatch]);

  useEffect(() => {
    if (updatePostingResult) {
      dispatch(getPosting());
      setTitle("");
      setContent("");
      setPosting(0);
      setId("");
    }
  }, [updatePostingResult, dispatch]);

  return (
    <div>
      <h3>{id ? "UPDATE POSTING" : "ADD POSTING"}</h3>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          type="text"
          name="content"
          placeholder="Content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />

        <select
          name="posting"
          value={posting}
          onChange={(event) => setPosting(parseInt(event.target.value))}
        >
          <option value={0}>Draft</option>
          <option value={1}>Send</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddPosting;
