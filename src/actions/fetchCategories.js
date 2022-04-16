import { fetchDataRequest, fetchDataSuccess, fetchDataError } from "./actions";

export function fetchCategories() {

  return dispatch => {
    dispatch(fetchDataRequest());
   fetch("https://api.thecatapi.com/v1/categories")
      .then(res => res.json())
      .then( response => {
        dispatch(fetchDataSuccess(response));
      })
      .catch(error => {
        dispatch(fetchDataError(error));
      });

  };
}