import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './containers/App.jsx';
import TitleSearch from './containers/TitleSearch.jsx';
import AuthorSearch from './containers/AuthorSearch.jsx';
import BookInfo from './containers/BookInfo.jsx';
import NotFound from './components/NotFound.jsx';

import store from './store';

import 'normalize.css';
import './assets/main.less';

const routes = (
    <Route component={App}>
        <Redirect from="/" to="title" />
        <Route path="title" component={TitleSearch} />
        <Route path="author" component={AuthorSearch} />
        <Route path="book/:id" component={BookInfo} />
        <Route path='*' component={NotFound} />
    </Route>
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('root')
);
