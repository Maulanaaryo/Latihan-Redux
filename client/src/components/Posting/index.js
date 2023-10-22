import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePosting,
  detailPosting,
  getPosting,
} from "../../actions/PostingAction";

function Posting() {
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
    <div>
      <h2>Posting</h2>
      {getPostingResult ? (
        getPostingResult.map((posting) => {
          return (
            <p key={posting.id}>
              {posting.title} - {posting.content} : {posting.posting}{" "}
              <button onClick={() => dispatch(deletePosting(posting.id))}>
                Hapus
              </button>
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => dispatch(detailPosting(posting))}
              >
                Edit
              </button>
            </p>
          );
        })
      ) : getPostingLoading ? (
        <p>Loading . . .</p>
      ) : (
        <p>{getPostingError ? getPostingError : "Data Kosong"} </p>
      )}
    </div>
  );
}

export default Posting;
