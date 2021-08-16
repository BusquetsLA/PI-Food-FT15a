import React from 'react';
import { Link } from 'react-router-dom';

export const Landing = () => {
    return (
        <div>
            <div>
                <h1>Spoonacular App</h1>
                <h3>Let's say you're becoming a chef, starting a new diet or just looking to make something special for dinner, you've come to the right app!</h3>
                <Link to='/home'>
                    <button>HOME</button>
                </Link>
            </div>
        </div>
    );
};
export default Landing;