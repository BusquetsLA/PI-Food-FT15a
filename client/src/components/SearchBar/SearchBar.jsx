import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import { getRecipes, getRecipeByName } from '../../actions/index';

export const SearchBar = () => {

    const dispatch = useDispatch();
    const [input, setInput] = useState('');

    useEffect(() => {
        dispatch(getRecipeByName(input));
    }, [dispatch, input]);

    const handleChange = (e) => {
        setInput(e.target.value);
        console.log(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setInput(e.target.value);
        if (input) {
            dispatch(getRecipeByName(input));
            setInput("");
        } else {
            dispatch(getRecipes());
            setInput("");
        }
    };

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type='text'
                    placeholder='Recipe name...'
                    autoComplete='off'
                    value={input}
                    name='title'
                    onChange={(e) => handleChange(e)} 
                />
                <button type='submit'> Search </button>
            </form>
        </div>
    );
};

export default SearchBar; // deberia estar