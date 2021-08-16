import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, title, image, Diets }) => {
    return (
        <div>
            <Link to={`/detail/${id}`}>
                <h2>{title}</h2>
                <div>
                    <img src={image} className='image'alt='recipe picture'/>
                </div>
                { Diets
                    ? <div>{Diets && Diets.map((diet, i) => (
                        <li key={i}>{diet.name}</li> // las prop name de los obj del arreglo de dietas
                    ))}</div>
                    : null
                }
            </Link>
        </div>
    );
}
export default Card; // deberia estar