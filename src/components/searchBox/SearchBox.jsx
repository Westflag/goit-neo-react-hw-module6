import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBox.module.css';

export default function SearchBox({value, onChange}) {
    return (
        <div className={styles['search-box']}>
            <label>
                Find contacts by name
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            </label>
        </div>
    );
}

SearchBox.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
