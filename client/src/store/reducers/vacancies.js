import { FETCH_SUCCESS, FETCH_LOADING, FETCH_EROR, FETCH_ONE_SUCCESS } from "../actionTypes/vacanciesType";

let initialState = {
  vacancies: [],
  vacancy: {},
  loading: true,
  erros: null,
};

export default function vacanciesReducers(state = initialState, action) {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        vacancies: action.payload,
      };
    case FETCH_ONE_SUCCESS:
      return {
        ...state,
        vacancy: action.payload,
      };
    case FETCH_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case FETCH_EROR:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return { ...state };
  }
}
