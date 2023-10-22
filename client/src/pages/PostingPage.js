import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePosting,
  detailPosting,
  getPosting,
} from "../actions/PostingAction";
import { Link } from "react-router-dom";

const PostingPage = () => {
  const {
    getPostingResult,
    getPostingLoading,
    getPostingError,
    deletePostingResult,
  } = useSelector((state) => state.PostingReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosting());
  }, [dispatch]);

  useEffect(() => {
    if (deletePostingResult) {
      dispatch(getPosting());
    }
  }, [deletePostingResult, dispatch]);

  return (
    <div className="d-flex flex-row flex-wrap">
      {getPostingResult ? (
        getPostingResult.map((posting) => (
          <div
            key={posting.id}
            className="card mb-3 me-2"
            style={{ width: "13rem", marginTop: "20px" }}
          >
            <div className="card-body">
              <h5 className="card-title">{posting.title}</h5>
              <p className="card-text">{posting.content}</p>
              <p className="card-text">{posting.posting}</p>
              <button
                onClick={() => dispatch(deletePosting(posting.id))}
                className="btn btn-danger"
              >
                Delete
              </button>
              <Link
                to={{
                  pathname: "/articles/update",
                }}
                onClick={() => dispatch(detailPosting(posting))}
                className="btn btn-warning"
                style={{ marginLeft: "10px" }}
              >
                Update
              </Link>
            </div>
          </div>
        ))
      ) : getPostingLoading ? (
        <p>Loading . . .</p>
      ) : (
        <p>{getPostingError ? getPostingError : "Data Kosong"} </p>
      )}
      <div
        className="card mb-3 me-3 text-center"
        style={{ width: "13rem", marginTop: "20px" }}
      >
        <div
          className="card-body d-flex justify-content-center align-items-center"
          style={{ height: "100px" }}
        >
          <Link to="/articles/add" className="btn btn-primary">
            Add Posting
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostingPage;
