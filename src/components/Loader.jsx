import React from 'react';

import CircularProgress from 'material-ui/CircularProgress';

const Loader = props => {
    return (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
            {
                props.loading
                    ? <CircularProgress size={60} thickness={5} />
                    : props.children
            }
        </div>
    );
};

export default Loader;