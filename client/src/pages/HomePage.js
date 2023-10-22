import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosting } from "../actions/PostingAction";

const HomePage = () => {
  const { getPostingResult, getPostingLoading, getPostingError } = useSelector(
    (state) => state.PostingReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosting());
  }, [dispatch]);

  return (
    <div>
      <h2>HomePage</h2>
      {getPostingResult ? (
        getPostingResult.map((posting) => (
          <p key={posting.id}>
            {posting.title} - {posting.content} : {posting.posting}
          </p>
        ))
      ) : getPostingLoading ? (
        <p>Loading . . .</p>
      ) : (
        <p>{getPostingError ? getPostingError : "Data Kosong"} </p>
      )}
    </div>
  );
};

export default HomePage;
