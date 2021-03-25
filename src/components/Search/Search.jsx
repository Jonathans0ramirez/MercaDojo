import React, { useState } from 'react';
import SearchStyles from './Search.module.sass'

const Search = ({ placeholder, handleAction }) => {

    const [searchValue, setSearchValue] = useState('');

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            handleAction(searchValue);
            setSearchValue('');
        }
    }

    return (
        <div className={SearchStyles.container}>
            <input
                className={SearchStyles.inputClos}
                placeholder={placeholder}
                onKeyDown={handleKeyDown}
                value={searchValue}
                onChange={event => {
                    setSearchValue(event.target.value)
                }}
                type="text"
            />
            <div className={SearchStyles.search}></div>
        </div>
    )
}

export default Search;