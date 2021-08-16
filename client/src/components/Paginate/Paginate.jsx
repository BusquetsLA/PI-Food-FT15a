import React from 'react';
import { useSelector } from 'react-redux';

export const Paginate = ({ recipesPerPage, pagination }) => {
    const recipes = useSelector((state) => state.recipes);
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(recipes/recipesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <ul>
                {pageNumbers &&
                pageNumbers.map(number => (
                    <li key={number}>
                        <a onClick={() => pagination(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Paginate; // deberia estar