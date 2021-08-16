export const orderByParam = (order, array) => {
    const recipes = [...array];
    switch (order) {
        case 'name_asc':
            return recipes.sort((a, b) => {
                if (a.title > b.title) {
                    return 1;
                } else {
                    return -1;
                }
            });
        case 'name_desc':
            return recipes.sort((a, b) => {
                if (a.title < b.title) {
                    return 1;
                } else {
                    return -1;
                }
            });
        case "score_higher":
            return recipes.sort((a, b) => {
                if (a.spoonacularScore > b.spoonacularScore) {
                    return 1;
                } else {
                    return -1;
                }
            });
            case "score_lower":
                return recipes.sort((a, b) => {
                    if (a.spoonacularScore < b.spoonacularScore) {
                        return 1;
                    } else {
                        return -1;
                    }
                });
        default:
            return recipes;
    };
};
export const filterByDiet = (diet, array) => {
    if (diet !== 'all') {
        let recipes = array.filter((recipe) => {
            if (recipe.Diets) { // api/src/routes/recipes, el arreglo con los diet types
                for (let i = 0; i < recipe.Diets.length; i++) {
                    if (recipe.Diets[i].name === diet) {
                        return true;
                    }
                }
            }
        });
        return recipes;
    };
    return array;
};