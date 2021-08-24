import React from 'react';
import Order from '../Order/Order';
import Cards from '../Cards/Cards';
import Nav from '../Nav/Nav';
import styles from './Home.module.css';

export const Home = () => {
    return (
        <div className={styles.container}>
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