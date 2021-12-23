import actionTypes from "../actionTypes";

const initialState = {
    id: -1,
    title: '',
    content: '',
    date: '',
    time: '',
}

export default (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_INPUT_CONTENT:{
            const { content } = action;
            return {
                ...state,
                content,
            }
        }
        case actionTypes.SET_INPUT_ID:{
            const { id } = action;
            return {
                ...state,
                id,
            }
        }
        case actionTypes.RESET_INPUT:{
            return initialState;
        }

        case actionTypes.SET_INPUT_DATE:{
            const { date } = action;
            return {
                ...state,
                date,
            }
        }
        case actionTypes.SET_INPUT_TIME:{
            const { time } = action;
            return {
                ...state,
                time,
            }
        }
        default:
            return state;
    }
    
}