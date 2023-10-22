import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosting } from "../../actions/PostingAction";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const HomePage = () => {
  const { getPostingResult, getPostingLoading, getPostingError } = useSelector(
    (state) => state.PostingReducer
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) navigate("/login");
    dispatch(getPosting());
  }, [dispatch, navigate]);

  return (
    <div className="home-page-container">
      {getPostingResult ? (
        getPostingResult.map((posting) => (
          <div key={posting.id} className="card mb-3 custom-card">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={posting.image}
                  className="img-fluid rounded-start card-image"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{posting.title}</h5>
                  <p className="card-text">{posting.content}</p>
                </div>
              </div>
            </div>
          </div>
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
