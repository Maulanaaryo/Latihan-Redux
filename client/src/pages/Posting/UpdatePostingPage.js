import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosting, updatePosting } from "../../actions/PostingAction";

const UpdatePostingPage = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [posting, setPosting] = useState(0);
  const [id, setId] = useState("");

  const { detailPostingResult, updatePostingResult } = useSelector(
    (state) => state.PostingReducer
  );
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      updatePosting({
        id: id,
        title: title,
        image: image,
        content: content,
        posting: posting,
      })
    );
  };

  useEffect(() => {
    if (detailPostingResult) {
      console.log("Masuk ke detail");
      setTitle(detailPostingResult.title);
      setImage(detailPostingResult.image);
      setContent(detailPostingResult.content);
      setPosting(detailPostingResult.posting);
      setId(detailPostingResult.id);
    }
  }, [detailPostingResult, dispatch]);

  useEffect(() => {
    if (updatePostingResult) {
      dispatch(getPosting());
      setTitle("");
      setImage("");
      setContent("");
      setPosting(0);
      setId("");
    }
  }, [updatePostingResult, dispatch]);
  return (
    <div style={{ marginTop: "20px" }}>
      <h2 style={{ textAlign: "center" }}>{"UPDATE POSTING"}</h2>
      <form
        onSubmit={(event) => handleSubmit(event)}
        style={{ marginTop: "20px" }}
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            className="form-control"
            id="content"
            rows="3"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="posting" className="form-label">
            Posting
          </label>
          <select
            className="form-select"
            aria-label="Select Posting"
            value={posting}
            onChange={(event) =>
              setPosting(parseInt(event.target.value === "1" ? 1 : 0))
            }
          >
            <option value="0">Private</option>
            <option value="1">Public</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdatePostingPage;
