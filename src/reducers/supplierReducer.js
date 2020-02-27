import {
    CREATE_PRODUCT, PRODUCT_ERROR
} from '../actions/types';

const initialState = {
    products: null,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case CREATE_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        default:
            return state;
    }

}