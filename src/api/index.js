import axios from 'axios';

const API_PREFIX = 'https://www.googleapis.com/books/v1/volumes';

export function searchBooksByTitle(query) {
    const params = {
        q: `intitle:"${query}"`
    };

    return axios.get(`${API_PREFIX}`, { params });
}

export function searchBooksByAuthor(query) {
    const params = {
        q: `inauthor:"${query}"`
    };

    return axios.get(`${API_PREFIX}`, { params });
}

export function fetchBook(id) {
    return axios.get(`${API_PREFIX}/${id}`);
}

export default {
    searchBooksByTitle,
    searchBooksByAuthor,
    fetchBook
};
