import axios from "axios";

export const GET_POSTING = "GET_POSTING";
export const ADD_POSTING = "ADD_POSTING";
export const DELETE_POSTING = "DELETE_POSTING";
export const DETAIL_POSTING = "DETAIL_POSTING";
export const UPDATE_POSTING = "UPDATE_POSTING";

export const getPosting = () => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_POSTING,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "GET",
      url: "http://localhost:3000/articles",
      timeout: 120000,
    })
      .then((response) => {
        dispatch({
          type: GET_POSTING,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_POSTING,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const addPosting = (data) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: ADD_POSTING,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // post API
    axios({
      method: "POST",
      url: "http://localhost:3000/articles",
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        dispatch({
          type: ADD_POSTING,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: ADD_POSTING,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deletePosting = (id) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: DELETE_POSTING,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // delete API
    axios({
      method: "DELETE",
      url: "http://localhost:3000/articles/" + id,
      timeout: 120000,
    })
      .then((response) => {
        dispatch({
          type: DELETE_POSTING,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_POSTING,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const detailPosting = (data) => {
  return (dispatch) => {
    dispatch({
      type: DETAIL_POSTING,
      payload: {
        data: data,
      },
    });
  };
};

export const updatePosting = (data) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: UPDATE_POSTING,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // put API
    axios({
      method: "PUT",
      url: "http://localhost:3000/articles/" + data.id,
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        dispatch({
          type: UPDATE_POSTING,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_POSTING,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
