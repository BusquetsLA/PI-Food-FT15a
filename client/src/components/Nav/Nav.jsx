import React from 'react';
import { Link/*, useHistory*/ } from 'react-router-dom';
import  SearchBar from '../SearchBar/SearchBar';
import logo from '../../assets/cooking.png';
import styles from './Nav.module.css';

export const Nav = () => {
    // const history = useHistory();
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={logo} alt='app logo' width='70' height='55'/>
                <h1>Spoonacular App</h1>
            </div>
            <div className={styles.search}>
                <SearchBar/>
            </div>
            <div className={styles.btnContainer}>
                <Link to='/home'>
                    <button className={styles.btn}> HOME </button> 
                </Link>
                <Link to='/create'>
                    <button className={styles.btn}> CREATE RECIPE </button> 
                </Link>
            </div>
        </div>
    );
};
export default Nav;