import axios from 'axios'

const APP_URL = 'https://eaf0-27-69-242-160.ngrok-free.app/products';
const APP_URL_FAVORITE = 'https://eaf0-27-69-242-160.ngrok-free.app/favorites';

const getListProduct = async () => {
    try {
        const response = await fetch(APP_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Lỗi: " + error);
    }
}

const getDetailProduct = async (id) => {
    // setLoading(true);
    try {
        const response = await fetch(`${APP_URL}/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    } finally {
    }
}

const updateProduct = async (id, updateProduct) => {
    try {
        const response = await fetch(`${APP_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error updating product:', error);
    } 
}

const deleteProduct = async (id) => {
    try {
        const response = await fetch(`${APP_URL}/${id}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error deleting product:', error);
    }
}

const addProduct = async (product) => {
    try {
        const response = await fetch(`${APP_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error adding product:', error);
    }
}

const getListFavorite = async (uid) => {
    try {
        const response = await fetch(`${APP_URL_FAVORITE}?uid=${uid}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Lỗi" + error);
    }
}

const addProductFavorite = async (product) => {
    try {
        const response = await fetch(`${APP_URL_FAVORITE}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error adding product:', error);
    }
}

const deleteProductFavorite = async (id) => {
    try {
        const response = await fetch(`${APP_URL_FAVORITE}/${id}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error deleting product:', error);
    }
}



export { getListProduct, getDetailProduct, getListFavorite, addProduct, updateProduct, deleteProduct, deleteProductFavorite, addProductFavorite }










// const getUSER
// const getListProduct = async () => {
//     try {
//         const response = await axios.get(`${APP_URL}/products`);
//         return response.data;
//     } catch (error) {
//         console.log("Lỗi: "+err);
//     } finally {
//     }
// }

// const getDetailProduct = async (id, setLoading) => {
//     setLoading(true)
//     try {
//         const response = await axios.get(`${APP_URL}/products/${id}`);
//         return response.data;
//     } catch (error) {
//         console.log(err);
//     } finally {
//         setLoading(false);
//     }
// }

// const updateProduct = async (id, updateProduct) => {
//     try {
//         const response = await axios.put(`${APP_URL}/products/${productId}`, updateProduct);
//         return response.data;
//     } catch (error) {
//         console.error('Error updating product:', error);
//     }
// }

// const deleteProduct = async (id) => {
//     try {
//         const response = await axios.delete(`${APP_URL}/products/${productId}`);
//         return response.data;
//     } catch (error) {
//         console.error('Error deleting product:', error);
//     }
// }

// const addProduct = async (product) => {
//     try {
//         const response = await axios.post(`${APP_URL}/products`, product);
//         return response.data;
//     } catch (error) {
//         console.error('Error adding product:', error);
//     }
// }


// const getListFavorite = async () => {
//     try {
//         const response = await axios.get(`${APP_URL}/favorites`);
//         return response.data;
//     } catch (error) {
//         console.log("Lỗi"+error);
//     }
// }

// const addProductFavorite = async (product) => {
//     try {
//         const response = await axios.post(`${APP_URL}/favorites`, product);
//         return response.data;
//     } catch (error) {
//         console.error('Error adding product:', error);
//     }
// }

// const deleteProductFavorite = async (id, uid) => {
//     try {
//         const response = await axios.delete(`${APP_URL}/products/${productId}`, {
//             params: {
//                 idProduct: id,
//                 uid: uid,
//             }
//         });
//         return response.data;
//     } catch (error) {
//         console.error('Error deleting product:', error);
//     }
// }