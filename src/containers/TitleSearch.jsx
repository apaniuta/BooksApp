import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { searchBooksByTitle } from '../actions';

import SearchNav from '../components/SearchNav.jsx';
import SearchBox from '../components/SearchBox.jsx';
import Loader from '../components/Loader.jsx';
import BooksList from '../components/BooksList.jsx';

@withRouter
@connect(
    mapStateToProps,
    { searchBooksByTitle }
)
export default class TitleSearch extends Component {
    componentDidMount() {
        const { search, searchBooksByTitle } = this.props;

        if (search) {
            searchBooksByTitle(search);
        }
    }

    componentWillReceiveProps(nextProps) {
        const { search, searchBooksByTitle } = this.props;

        if (nextProps.search !== search) {
            searchBooksByTitle(nextProps.search);
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