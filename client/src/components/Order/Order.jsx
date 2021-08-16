import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderRecipes , getDiets, filterByDiet } from '../../actions/index';

export const Order = () => {
    const dispatch = useDispatch();
    const diets = useSelector((state) => state.diets);

    useEffect(() => {
        dispatch(getDiets());
    }, [dispatch]);
    const handleOrder = (e) => {
        dispatch(orderRecipes(e.target.value));
    };
    const handleDiets = (e) => {
        dispatch(filterByDiet(e.target.value));
    };

    return (
        <div>
            <div>
                <h3>Order</h3>
                <select onChange={(e) => handleOrder(e)}>
                    <option value="All">All</option>
                    <option value="name_asc"> A-Z </option>
                    <option value="name_desc"> Z-A </option>
                </select>
            </div>
            <div>
                <h3>Score</h3>
                <select onChange={(e) => handleOrder(e)}>
                    <option value="All">All</option>
                    <option value='score_higher'>Higher score</option>
                    <option value='score_lower'>Lower score</option>
                </select>
            </div>
            <div>
                <h3>Diet</h3>
                <select className="boton" onChange={(e) => handleDiets(e)}>
                    <option value="all">Diets</option>
                    {diets &&
                        diets.map((type, i) => (
                        <option key={i} value={type.name}>
                            {type.name}
                        </option>
                        ))}
                </select>
            </div>
        </div>
    );
};
export default Order;