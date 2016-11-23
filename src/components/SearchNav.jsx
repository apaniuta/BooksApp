import React from 'react';

import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

import styles from './SearchNav.less';

const SearchNav = () => (
    <div className={styles.container}>
        <RaisedButton
            className={styles.button}
            label="Search By Title"
            containerElement={<Link activeClassName={styles.active} to="/title" />}
        />
        <RaisedButton
            className={styles.button}
            label="Search By Author"
            containerElement={<Link activeClassName={styles.active} to="/author" />}
        />
    </div>
);

export default SearchNav;