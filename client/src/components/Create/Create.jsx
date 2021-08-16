import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getDiets, createRecipe } from '../../actions/index';

export function validate (input) {
    let errors = {}
    if (!input.title) {
        errors.title = 'Title is required.';
    } else if (!/([A-Z]|[a-z])\w+/.test(input.name)) {
        errors.name = 'Title must be letters from a to z.';
    }
    if (!input.summary) {
        errors.summary = 'Summary is required.';
    } else if (!/([A-Z]|[a-z])|\w+/.test(input.summary)) {
        errors.summary = 'Summary must be letters from a to z.';
    }
    if (!/^([0-9]|[1-9][0-9]|[1][0][0])$/.test(input.spoonacularScore)) {
        errors.spoonacularScore = 'Score must be a number between 0 and 100.';
    }
    if (!/^([0-9]|[1-9][0-9]|[1][0][0])$/.test(input.healthScore)) {
        errors.healthScore = 'Score must be a number between 0 and 100.';
    }
    return errors
  }

export const Create = () => {
    const dispatch = useDispatch();
    const diets = useSelector(state => state.diets);

    useEffect(() => { 
        dispatch(getDiets());
    }, []);

    const [input, setInput] = useState({
        title: '',
        summary: '',
        spoonacularScore: 0,
        healthScore: 0,
        analyzedInstructions: '',
        diets: []
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = function(e) {
        if(e.target.name === "diets") {
            const dietsSelection = input[e.target.name]
            setInput({
                ...input, [e.target.name]: dietsSelection.concat(e.target.value)
            })
        } else {
            setInput({
                ...input, [e.target.name]: e.target.value
            });
            setErrors(
                validate({...input, [e.target.name]: e.target.value})
            );
        }
    }
    const handleCheckbox = (e) => {
        if (e.target.checked) {
            setInput({ 
                ...input, diets: [...input.diets, e.target.value]
            });
        } else {
          setInput({
            ...input, diets: input.diets.filter((diet) => diet !== e.target.value)
          });
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.keys(errors).length === 0) {
            await axios.post(`http://localhost:3001/recipe`, input);
            // dispatch(createRecipe(input));
            alert(`Your recipe '${input.title}' has been created successfully`);
            setInput({
                title: '',
                summary: '',
                spoonacularScore: 0,
                healthScore: 0,
                analyzedInstructions: '',
                diets: []
            });
        } else {
            alert('Necessary parameters are required.');
        }
    };

    return (
        <div>
            <h1> Create your own recipe </h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label className='label'>Recipe title: </label>
                    <input
                        className={`${errors.title && "danger"}`}
                        type="text"
                        name="title"
                        value={input.title}
                        onChange={handleInputChange}
                    /> {errors.title && (<p className="danger">{errors.title}</p>)}
                </div>
                <div>
                    <label className='label'>Recipe summary: </label>
                    <input
                        className={`${errors.summary && "danger"}`}
                        type="text"
                        name="summary"
                        value={input.summary}
                        onChange={handleInputChange}
                    /> {errors.summary && (<p className="danger">{errors.summary}</p>)}
                </div>
                <div>
                    <label className='label'>Recipe score: </label>
                    <input
                        className={`${errors.spoonacularScore && "danger"}`}
                        type="number"
                        min="0"
                        max="100"
                        name="spoonacularScore"
                        value={input.spoonacularScore}
                        onChange={handleInputChange}
                    /> {errors.spoonacularScore && (<p className="danger">{errors.spoonacularScore}</p>)}
                </div>
                <div>
                    <label className='label'>Health score: </label>
                    <input
                        className={`${errors.healthScore && "danger"}`}
                        type="number"
                        min="0"
                        max="100"
                        name="healthScore"
                        value={input.healthScore}
                        onChange={handleInputChange}
                    /> {errors.healthScore && (<p className="danger">{errors.healthScore}</p>)}
                </div>
                <div>
                    <label className='label'>Instructions: </label>
                    <textarea
                        onChange={handleInputChange}
                        className="text"
                        type="text"
                        name="analyzedInstructions"
                        value={input.analyzedInstructions}
                    ></textarea>
                </div>
                <div className="checkbox">
                    <label className='label'>Pick the diet/s: </label>
                    <div>
                        {diets.map(diet => 
                            <span key={diet.name}>
                                <input
                                    className="input_diets"
                                    type="checkbox"
                                    name="diets"
                                    value={diet.id}
                                    onChange={handleCheckbox}
                                />
                                <label name={diet}>{diet.name}</label>
                            </span>
                        )}
                    </div>
                </div>
                <div>
                    <button type='submit'> Submit! </button>
                </div>
            </form>
            <div>
                <Link to='/home'>
                    <button>Back</button> 
                </Link>
            </div>
        </div>
    );
};
export default Create;
/*
[ ] Un formulario controlado con los siguientes campos
Nombre
Resumen del plato
Puntuación
Nivel de "comida saludable"
Paso a paso
[ ] Posibilidad de seleccionar/agregar uno o más tipos de dietas
[ ] Botón/Opción para crear una nueva receta
*/