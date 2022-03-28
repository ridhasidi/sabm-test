import axios from "axios";
import { FETCH_SUCCESS, FETCH_LOADING, FETCH_EROR, FETCH_ONE_SUCCESS } from "../actionTypes/vacanciesType";

const baseUrl = "https://ridhasidi-vacancies.herokuapp.com/vacancies";

export const fetchVacancies = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: baseUrl,
      });
      dispatch(fetchSuccess(data));
    } catch (error) {
      dispatch(fetchError(error.response.data));
    } finally {
      dispatch(fetchLoading(false));
    }
  };
};
export const fetchOneVacancy = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `${baseUrl}/${id}`,
      });
      dispatch(fetchOneSuccess(data));
    } catch (error) {
      dispatch(fetchError(error.response.data));
    } finally {
      dispatch(fetchLoading(false));
    }
  };
};

const fetchSuccess = (payload) => {
  return {
    type: FETCH_SUCCESS,
    payload,
  };
};
const fetchOneSuccess = (payload) => {
  return {
    type: FETCH_ONE_SUCCESS,
    payload,
  };
};
export const fetchLoading = (payload) => {
  return {
    type: FETCH_LOADING,
    payload,
  };
};
export const fetchError = (payload) => {
  return {
    type: FETCH_EROR,
    payload,
  };
};
