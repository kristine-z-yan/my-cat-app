import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from "../actions/actionTypes";

let initialState = {
    categories: null,
    loading: false,
    error: null
  };
  
function reducer(state = initialState, action) {
    switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.data
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        categories: []
      };    
    default:
      return state;
  }
}

export default reducer;
  