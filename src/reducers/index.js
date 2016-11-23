import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import {
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_BY_TITLE_SUCCESS,
    FETCH_BOOKS_BY_AUTHOR_SUCCESS,
    FETCH_BOOK_REQUEST,
    FETCH_BOOK_SUCCESS
} from '../actions';

const books = ( state = { isFetching: false, items: [] }, action) => {
    switch (action.type) {
        case FETCH_BOOKS_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_BOOKS_BY_TITLE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                items: action.items ? action.items : []
            };
        case FETCH_BOOKS_BY_AUTHOR_SUCCESS:
            return {
                ...state,
                isFetching: false,
                items: action.items ? action.items : []
            };
        default:
            return state;
    }
};

const book = ( state = { isFetching: false, info: {} }, action) => {
    switch (action.type) {
        case FETCH_BOOK_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_BOOK_SUCCESS:
            return {
                ...state,
                isFetching: false,
                info: action.book
            };
        default:
            return state;
    }
};


export default combineReducers({ books, book, routing });
