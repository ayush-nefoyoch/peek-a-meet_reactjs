import {combineReducers} from 'redux';
import notes from "./notes";
import inputs from './inputs';
import asyncService from './asyncService';

export default combineReducers({
    notes,
    inputs,
    asyncService
    
})