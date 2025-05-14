import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeFilter} from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

export default function SearchBox() {
    const filter = useSelector((state) => state.filters.name);
    const dispatch = useDispatch();

    return (
        <div className={styles['search-box']}>
            <label>
                Find contacts by name
                <input
                    type="text"
                    value={filter}
                    onChange={(e) => dispatch(changeFilter(e.target.value))}
                />
            </label>
        </div>
    );
}

