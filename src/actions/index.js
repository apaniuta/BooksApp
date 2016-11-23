import api from '../api';

export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const FETCH_BOOKS_BY_TITLE_SUCCESS = 'FETCH_BOOKS_BY_TITLE_SUCCESS';
export const FETCH_BOOKS_BY_AUTHOR_SUCCESS = 'FETCH_BOOKS_BY_AUTHOR_SUCCESS';

export const FETCH_BOOK_REQUEST = 'FETCH_BOOK_REQUEST';
export const FETCH_BOOK_SUCCESS = 'FETCH_BOOK_SUCCESS';

export const fetchBooksRequest = () => ({
    type: FETCH_BOOKS_REQUEST
});

export const fetchBooksByTitleSuccess = ({ data }) => ({
    type: FETCH_BOOKS_BY_TITLE_SUCCESS,
    ...data
});

export const fetchBooksByAuthorSuccess = ({ data }) => ({
    type: FETCH_BOOKS_BY_AUTHOR_SUCCESS,
    ...data
});

export const fetchBookRequest = () => ({
    type: FETCH_BOOK_REQUEST
});

export const fetchBookSuccess = data => ({
    type: FETCH_BOOK_SUCCESS,
    book: data.data
});

export const searchBooksByTitle = query => dispatch => {
    dispatch(fetchBooksRequest());

    return api.searchBooksByTitle(query)
        .then(data => dispatch(fetchBooksByTitleSuccess(data)));
};

export const searchBooksByAuthor = query => dispatch => {
    dispatch(fetchBooksRequest());

    return api.searchBooksByAuthor(query)
        .then(data => dispatch(fetchBooksByAuthorSuccess(data)));
};

export const fetchBook = id => dispatch => {
    dispatch(fetchBookRequest());

    return api.fetchBook(id)
        .then(data => dispatch(fetchBookSuccess(data)));
};
