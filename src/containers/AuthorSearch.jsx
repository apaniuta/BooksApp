import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { searchBooksByAuthor } from '../actions';

import SearchNav from '../components/SearchNav.jsx';
import SearchBox from '../components/SearchBox.jsx';
import Loader from '../components/Loader.jsx';
import BooksList from '../components/BooksList.jsx';

@withRouter
@connect(
    mapStateToProps,
    { searchBooksByAuthor }
)
export default class AuthorSearch extends Component {
    componentDidMount() {
        const { search, searchBooksByAuthor } = this.props;

        if (search) {
            searchBooksByAuthor(search);
        }
    }

    componentWillReceiveProps(nextProps) {
        const { search, searchBooksByAuthor } = this.props;

        if (nextProps.search !== search) {
            searchBooksByAuthor(nextProps.search);
        }
    }

    handleSearch = search => {
        const { router, location } = this.props;

        router.push({
            pathname: location.pathname,
            query: { ...location.query, search },
        });
    }

    render() {
        const { search, loading, books } = this.props;

        return (
            <div>
                <SearchNav />
                <SearchBox search={search} onSearch={this.handleSearch} />
                <Loader loading={loading}>
                    <BooksList books={search ? books : []} />
                </Loader>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        books: state.books.items,
        loading: state.books.isFetching,
        search: ownProps.location.query.search
    };
}