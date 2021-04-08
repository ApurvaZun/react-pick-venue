import React from 'react';

const Button = ({ query, handleOnClick, child }) => {
    return(
        <>
            <button
                type="submit"
                className="search__button"
                onClick={handleOnClick}
            >
                {child}
            </button>
        </>
    )
}

export default Button;