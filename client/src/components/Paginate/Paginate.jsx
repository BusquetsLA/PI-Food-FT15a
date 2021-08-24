import React from 'react';
// import { useSelector } from 'react-redux';
import styles from './Paginate.module.css';

export const Paginate = ({ recipesPerPage, allRecipes, paginate }) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(allRecipes.length / recipesPerPage); i++) {
        console.log(i)
        pageNumbers.push(i);
    }

    return (
        <nav className={styles.paginate}>
            {console.log(pageNumbers)}
            {pageNumbers &&
            pageNumbers.map(number => (
                <button className={styles.btn} onClick={() => paginate(number)}>{number}</button>
            ))}
        </nav>
    );
};
export default Paginate;