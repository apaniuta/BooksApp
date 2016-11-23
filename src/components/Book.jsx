import React from 'react';
import { Link } from 'react-router';

import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';

import styles from './Book.less';
import NO_COVER from '../assets/no-cover.jpg';

const Book = props => {
    const { volumeInfo: book } = props;

    const IMG_URL = book.imageLinks;
    const DESCRIPTION = book.description ? book.description : 'No description';
    const CUTTED_DESCRIPTION = (DESCRIPTION.length < 200) ? DESCRIPTION : DESCRIPTION.slice(0, 200) + '...';

    return (
        <Paper className={styles.container}>
            <img className={styles.img} src={IMG_URL ? IMG_URL.thumbnail : NO_COVER} />
            <div className={styles.info}>
                <div>
                    <h1 className={styles.title}>{book.title}</h1>
                    <p className={styles.description}>{CUTTED_DESCRIPTION}</p>
                </div>

                <div>
                    <Divider />
                    <div className={styles.actions}>
                        <Link to={`/book/${props.id}`}>
                            <FlatButton
                                label="More info"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </Paper>
    );
};

export default Book;