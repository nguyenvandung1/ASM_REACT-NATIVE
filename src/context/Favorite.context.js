

import React, { createContext, useContext, useState } from 'react'

const FavoriteContex = createContext();
export const useFavoriteProducts = () => {
    return useContext(FavoriteContex)
}

const Favorite_context = ({ children }) => {
    const [favoriteProducts, setFavoriteProducts] = useState([]);
    return (
        <FavoriteContex.Provider
            value={{ favoriteProducts, setFavoriteProducts }}
        >
            {children}
        </FavoriteContex.Provider>
    )
}

export {Favorite_context}

