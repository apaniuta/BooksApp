import React from 'react';

import Book from './Book.jsx';
import { teal500 } from 'material-ui/styles/colors';

import styles from './BooksList.less';

const BooksList = props => {
    const { books } = props;

    return (
        <div className={styles.container}>
            {
                books.length !== 0
                    ? books.map(book => <Book key={book.id} {...book} />)
                    : <p style={{ width: '100%', color: teal500 }}>No books to display</p>
            }
        </div>
    );
};

export default BooksList;