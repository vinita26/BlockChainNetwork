import { combineReducers } from 'redux';
import supplierReducer from './supplierReducer';
import oemReducer from './oemReducer';
import retailerReducer from './retailerReducer';
import userReducer from './userReducer';

export default combineReducers({
    supplier: supplierReducer,
    oem: oemReducer,
    retailer: retailerReducer,
    user: userReducer
});