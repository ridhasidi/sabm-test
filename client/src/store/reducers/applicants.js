import { CREATE_APP_SUCCESS, CREATE_APP_LOADING, CREATE_APP_EROR } from "../actionTypes/applicantsType";

let initialState = {
  newApplicant: [],
  newLoading: true,
  newError: null,
};

export default function vacanciesReducers(state = initialState, action) {
  switch (action.type) {
    case CREATE_APP_SUCCESS:
      return {
        ...state,
        newApplicant: action.payload,
      };
    case CREATE_APP_LOADING:
      return {
        ...state,
        newLoading: action.payload,
      };
    case CREATE_APP_EROR:
      return {
        ...state,
        newError: action.payload,
      };

    default:
      return { ...state };
  }
}
