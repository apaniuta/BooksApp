import React from 'react';
import { Link } from 'react-router';

import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';

import styles from './BookPage.less';
import NO_COVER from '../assets/no-cover.jpg';

const BookPage = props => {
    const { volumeInfo: book } = props;

    const IMG_URL = book.imageLinks;
    const DESCRIPTION = book.description ? book.description : 'No description';
    const CUTTED_DESCRIPTION = {
        __html: (DESCRIPTION.length < 300) ? DESCRIPTION : DESCRIPTION.slice(0, 300) + '...'
    };
    const AUTHORS = book.authors ? book.authors : [];

    const renderAuthors = (authors) => {
        return authors.map((author, index, array) => (
            <Link
                key={index}
                className={styles.author}
                to={`/author?search=${author}`}
            >
                {author}{index === array.length - 1 ? '' : ', '}
            </Link>
        ));
    };

    const categories = book.categories ? book.categories.join(', ') : '';

    return (
        <div className={styles.container}>
            <Paper className={styles.content}>
                <img className={styles.img} src={IMG_URL ? IMG_URL.thumbnail : NO_COVER} />
                <div className={styles.info}>
                    <div>
                        <h1 className={styles.title}>{book.title}</h1>
                        <p>
                            {
                                renderAuthors(AUTHORS)
                            }
                        </p>
                        <p className={styles.categories}>{categories}</p>
                        <p className={styles.description} dangerouslySetInnerHTML={CUTTED_DESCRIPTION} />
                    </div>

                    <div>
                        <Divider />
                        <div className={styles.button}>
                            <a href={book.canonicalVolumeLink}>
                                <FlatButton
                                    label="Buy"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
    );
};

export default BookPage;