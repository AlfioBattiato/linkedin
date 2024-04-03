import { PUT_TOKEN } from "../action";
import { GET_FETCH } from "../action";



const initialState = {
    apikey: [],
    utente: []

}

const singleAccount = function (state = initialState, action) {
    switch (action.type) {

        case PUT_TOKEN:
            return {
                ...state,
                apikey: [action.payload]
            }

        case GET_FETCH:
            return {
                ...state,
                utente: [action.payload]
            }
        default:
            return state;
    }

}
export default singleAccount;