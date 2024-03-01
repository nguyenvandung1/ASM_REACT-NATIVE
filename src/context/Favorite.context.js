

import React, { createContext, useContext, useState } from 'react'
import { dataItemHome } from '../data/index.data';
import { getListProduct } from '../../db/script/API_APP';

// favorite context
const FavoriteContex = createContext();
export const useFavoriteProducts = () => {
    return useContext(FavoriteContex)
}

// auth
const AuthContext = createContext();
export const useAuth = () => {
    return useContext(AuthContext)
}

// product 
const ProductContext = createContext();
export const useProduct = () => {
    return useContext(ProductContext);
}

// user
const UserLoginContext = createContext();
export const useUserLogin = () => {
    return useContext(UserLoginContext);
}



const Favorite_context = ({ children }) => {
    const [favoriteProducts, setFavoriteProducts] = useState([
        // {
        //     id: 0,
        //     idUser: 0,
        //     list: []
        // }
    ]);
    const [listAccount, setListAccount] = useState([
        {
            id: 0,
            name: 'Nguyễn Văn Dũng',
            mail: 'dung@1.com',
            pass: 12345678
        }
    ])

    // list product
    // const getData = async () => {
    //     return await getListProduct();
    // }
    const [listProduct, setListProduct] = useState([]);

    // userLogin
    const [userLogin, setUserLogin] = useState()
    return (
        <ProductContext.Provider
            value={{ listProduct, setListProduct }}
        >
            <AuthContext.Provider
                value={{ listAccount, setListAccount }}
            >
                <UserLoginContext.Provider
                    value={{ userLogin, setUserLogin }}
                >
                    <FavoriteContex.Provider
                        value={{ favoriteProducts, setFavoriteProducts }}
                    >
                        {children}
                    </FavoriteContex.Provider>
                </UserLoginContext.Provider>
            </AuthContext.Provider>
        </ProductContext.Provider>
    )
}

export { Favorite_context }

