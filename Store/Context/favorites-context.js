import { createContext, useState } from "react";

export const FavoriteContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorire: (id) => {}
});

const FavoritesContextProvide = ({children}) => {
    const [favoriteMealId, setFavoriteMealId] = useState([]);

    const value = {
        ids: favoriteMealId,
        addFavorite: addFavorite,
        removeFavorire: removeFavorire
    }

    function addFavorite(id){
        setFavoriteMealId((currentFavId) => [...currentFavId, id])
    }

    function removeFavorire(id){
        setFavoriteMealId((currentFavId) => currentFavId.filter(mealId => mealId !== id))}


    return  <FavoriteContext.Provider value={value}>
        {children}
    </FavoriteContext.Provider>
}

export default FavoritesContextProvide;