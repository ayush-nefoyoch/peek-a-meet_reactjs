import actionTypes from "../actionTypes";

export default {
    setInputContent: content=>({
        type: actionTypes.SET_INPUT_CONTENT,
        content,
    }),
    setInputId: id =>({
        type: actionTypes.SET_INPUT_ID,
        id,
    }),
    resetInputs: () => ({
        type: actionTypes.RESET_INPUT,
    }),

    setInputDate: date =>({
        type: actionTypes.SET_INPUT_DATE,
        date,
    }),
    setInputTime: time =>({
        type: actionTypes.SET_INPUT_TIME,
        time,
    }),
}