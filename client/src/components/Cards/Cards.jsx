import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from '../../actions/index';
import Card from '../Card/Card';
import Paginate from '../Paginate/Paginate';
import recipePicture from '../../assets/recipePicture.png';
import styles from './Cards.module.css';

export const Cards = () => {
    const dispatch = useDispatch()
    const allRecipes = useSelector((state) => state.recipes);
    // const recipesFilteredByDiet = useSelector((state) => state.recipesFilteredByDiet)
    // const filterName = useSelector((state) => state.filterName)
    const [currentPage, setCurrentPage] = useState(1);
    const recipesPerPage = 9;
    const indexLastRecipe = currentPage * recipesPerPage;
    const indexFirstRecipe = indexLastRecipe - recipesPerPage;
    const allPagRecipes = allRecipes.slice(indexFirstRecipe, indexLastRecipe);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        dispatch(getRecipes());
    }, []);

    return (
        <div>
            <div className={styles.container}>
                {allPagRecipes.map((el) => (
                    <Card
                        key={el.id}
                        id={el.id}
                        title={el.title}
                        image={el.image?el.image:recipePicture}
                        diets={el.Diets}
                    />
                ))}
            </div>
            <div className={styles.paginate}>
                <Paginate recipesPerPage={recipesPerPage} allRecipes={allRecipes} paginate={paginate} />
            </div>
        </div>
    )
};
export default Cards;