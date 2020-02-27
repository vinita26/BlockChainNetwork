import { CREATE_PRODUCT, PRODUCT_ERROR } from './types';

export const createProduct = (product) => async dispatch => {
    try {
        setLoading();
        const res = await fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(log)

        });
        const data = await res.json();
        dispatch({
            type: CREATE_PRODUCT,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: error.response.statusText
        })
    }

}
export default createProduct;