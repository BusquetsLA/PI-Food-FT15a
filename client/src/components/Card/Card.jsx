import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({ id, title, image, diets }) => {
    return (
        <div className={styles.container}>
            <Link to={`/detail/${id}`}>
                <div>
                    <img src={image} width='280' height='280' className='image'alt='recipe picture'/>
                </div>
                <h2 className={styles.title}>{title}</h2>
            </Link>
            {/* {console.log('esto es diets ',diets)} */}
            { diets
                ? <div>{diets && diets.map((diet, i) => (
                    <li key={i}>{diet.name}</li> // las prop name de los obj del arreglo de dietas
                ))}</div>
                : null
            }
        
        </div>
    );
}
export default Card; // deberia estar