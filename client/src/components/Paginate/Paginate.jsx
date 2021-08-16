import React from 'react';
import { useSelector } from 'react-redux';

export const Paginate = ({ recipesPerPage, allRecipes, paginate }) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(allRecipes.length / recipesPerPage); i++) {
        console.log(i)
        pageNumbers.push(i);
    }

    return (
        <div>
            <h3>YO SOY PAGINADO</h3>
            <ul>
                {console.log(pageNumbers)}
                {pageNumbers &&
                pageNumbers.map(number => (
                    <li key={number}>
                        <button onClick={() => paginate(number)}>{number}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Paginate;