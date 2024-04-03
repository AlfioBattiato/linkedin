import { GET_ACCOUNT } from "../action";



const initialState = {
    apikey: {content:["alfio"]},
   
}

const singleAccount = function (state = initialState, action) {
    switch (action.type) {

        case GET_ACCOUNT:
            return {
                ...state,
                apikey: [...state.apikey, action.payload] 
            }
        default:
            return state;
    }

}
export default singleAccount;