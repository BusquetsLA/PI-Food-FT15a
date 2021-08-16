import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from '../../actions/index';
import Card from '../Card/Card';
import Paginate from '../Paginate/Paginate';


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
            <div>
                {allPagRecipes.map((el) => (
                    <Card
                        key={el.id}
                        id={el.id}
                        title={el.title}
                        image={el.image}
                        diets={el.diets}
                    />
                ))}
            </div>
            <div>
                <Paginate recipesPerPage={recipesPerPage} paginate={paginate} />
            </div>
        </div>
    )
};
export default Cards;