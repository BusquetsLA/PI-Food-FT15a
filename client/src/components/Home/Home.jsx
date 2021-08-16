import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Paginate from '../Paginate/Paginate';
import Order from '../Order/Order';
import Cards from '../Cards/Cards';
import Nav from '../Nav/Nav';

export const Home = () => {
    return (
        <div>
            <div>
                <Nav />
            </div>
            <div>
                <Order />
            </div>
            <div>
                <Cards />
            </div>
        </div>
    );
};
export default Home;