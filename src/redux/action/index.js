export const GET_ACCOUNT='GET_ACCOUNT';




export const  getAccount=(parametro)=>{
    return {
        type:GET_ACCOUNT,
        payload:parametro
    }

}

