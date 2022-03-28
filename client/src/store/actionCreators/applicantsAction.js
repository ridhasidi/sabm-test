import axios from "axios";
import { CREATE_APP_SUCCESS, CREATE_APP_EROR, CREATE_APP_LOADING } from "../actionTypes/applicantsType";

const baseUrl = "http://localhost:3000/applicants";

export const createApplication = (payload) => {
  return (dispatch) => {
    return new Promise((res, rej) => {
      axios({
        method: "POST",
        url: baseUrl,
        headers: {
          "Content-Type": "application/json",
        },
        data: payload,
      })
        .then((data) => {
          // dispatch(createApplicationSuccess(data.data));
          res(data.data);
        })
        .catch((err) => {
          rej(err.response.data);
        });
    });
  };
};

export const createApplicationSuccess = (payload) => {
  return {
    type: CREATE_APP_SUCCESS,
    payload,
  };
};
export const createApplicationError = (payload) => {
  return {
    type: CREATE_APP_EROR,
    payload,
  };
};
export const createApplicationLoading = (payload) => {
  return {
    type: CREATE_APP_LOADING,
    payload,
  };
};
