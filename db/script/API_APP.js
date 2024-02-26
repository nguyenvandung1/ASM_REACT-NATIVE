import axios from 'axios'

const APP_URL = 'http://localhost:3000';

// const getUSER
const getProduct = async ()=>{
    try {
        const response = await axios.get(`${APP_URL}/products`);
        return response.data;
    } catch (error) {
        
    }
}