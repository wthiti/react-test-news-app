import { FETCH_NEWS, INPUT_SEARCH_TERM } from '../actions/index'

const initState = {
  currentFetch: 1,
  searchTerm: '',
  list: [],
  fullList: []
}

const FULFILLED = '_FULFILLED';

function filterStringInNews(filterString, news) {
  if(filterString.trim() === 0)
    return true;
  else
    return news.title.indexOf(filterString) >=0 ||
    news.text.indexOf(filterString) >= 0;
}

export default function(state = initState, action){
  switch (action.type) {
    case FETCH_NEWS + FULFILLED:
      const newFullList = [...state.fullList, ...action.payload.data];
      const newList = newFullList.filter((news) => filterStringInNews(state.searchTerm, news))
      return {
        ...state,
        currentFetch: action.meta.currentFetch,
        list: newList,
        fullList: newFullList
      };
    case INPUT_SEARCH_TERM:
      const filtedList = state.fullList.filter((news) => filterStringInNews(action.payload, news))
      return {
        ...state,
        searchTerm: action.payload,
        list: filtedList
      }
    default:
      return state;
  }
}
