import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Order from '../Order/Order';
import Cards from '../Cards/Cards';
import Nav from '../Nav/Nav';

export const Home = () => {
    return (
        <div>
            <h1>YO SOY HOME</h1>
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