import React from 'react';
import { Link } from 'react-router-dom';
import  SearchBar from '../SearchBar/SearchBar';
import logo from '../../assets/cooking.png';

export const Nav = () => {
    return (
        <div>
            <div>
                <img src={logo} alt='app logo' width='70' height='55'/>
                {/*<img src={logo}/>*/}
                <h1>Spoonacular App</h1>
            </div>
            <div className='search'>
                <SearchBar/>
            </div>
            <div>
                <Link to='/home'>
                    HOME
                </Link>
                <Link to='/create'>
                    CREATE RECIPE
                </Link>
            </div>
        </div>
    );
};
export default Nav; // estaria