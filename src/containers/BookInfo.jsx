import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBook } from '../actions';

import BookPage from '../components/BookPage.jsx';
import Loader from '../components/Loader.jsx';

@connect(
    mapStateToProps,
    { fetchBook }
)
export default class BookInfo extends Component {
    componentDidMount() {
        const { fetchBook, bookId } = this.props;

        fetchBook(bookId);
    }

    componentWillReceiveProps(nextProps) {
        const { fetchBook, bookId } = this.props;

        if (nextProps.bookId !== bookId) {
            fetchBook(nextProps.bookId);
        }
    }

    render() {
        const { book, loading } = this.props;

        return (
            <Loader loading={loading}>
                { Object.keys(book).length !== 0 ? <BookPage {...book} /> : null}
            </Loader>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        book: state.book.info,
        loading: state.book.isFetching,
        bookId: ownProps.params.id
    };
}