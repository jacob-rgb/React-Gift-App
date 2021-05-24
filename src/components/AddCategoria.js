import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategoria = ({setCategorias}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2) {
            setCategorias(cats => [inputValue, ...cats] );
            setInputValue('');
        }
    }


    return (

        <form onSubmit= {handleSubmit}>
            <input
             type="text"
             value={inputValue}
             onChange= { handleInputChange }
             />
        </form>

    )
}

AddCategoria.prototype = {
    setCategorias: PropTypes.func.isRequired
}
