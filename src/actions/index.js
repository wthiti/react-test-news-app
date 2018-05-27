import axios from 'axios';

export const FETCH_NEWS = 'FETCH_NEWS';
export const INPUT_SEARCH_TERM = 'INPUT_SEARCH_TERM';

const URL = 'http://localhost:4000/';

export function fetchNews(currentFetch) {
  const url = URL + currentFetch;
  const request = axios.get(url);

  return {
    type: FETCH_NEWS,
    payload: request,
    meta: {
      currentFetch
    }
  };
}

export function inputSearchTerm(term) {
  return {
    type: INPUT_SEARCH_TERM,
    payload: term
  }
}
