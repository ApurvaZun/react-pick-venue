import React from 'react';

const Input = ({ inputValue , handleOnChange,classes }) => {
    return(
        <section className={classes} >
            <input
                type="text"
                value={inputValue}
                onChange={(event) => handleOnChange(event.target.value)}
            />
        </section>
    )
}

export default Input;