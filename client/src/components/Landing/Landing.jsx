import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Landing.module.css';

export const Landing = () => {
    return (
        <div className={styles.container}>
            <div className={styles.welcome}>
                <h1 className={styles.title}>Spoonacular App</h1>
                <h3 className={styles.msg}> Let's say you're becoming a chef,<br />
                    starting a new diet or just <br />
                    looking to make something special for dinner, <br />
                    you've come to the right app! </h3>
                <Link to='/home'>
                    <button className={styles.btn}> HOME </button>
                </Link>
            </div>
        </div>
    );
};
export default Landing;