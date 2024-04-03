export const PUT_TOKEN = 'PUT_TOKEN';
export const GET_FETCH = 'GET_FETCH';
export const PUT_FETCH = 'PUT_FETCH';





export const putToken = (parametro) => {
    return {
        type: PUT_TOKEN,
        payload: parametro
    }

}
export const getFetch = (parametro) => {
    return (dispatch, getState) => {

        fetch(`https://striveschool-api.herokuapp.com/api/profile/me`, {
            headers: {
                Authorization: `Bearer ${parametro}` // Sostituisci "yourTokenVariable" con la variabile che contiene il token
            }
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Problema nella chiamata API");
                }
            })
            .then((obj) => {
                dispatch({
                    type: GET_FETCH,
                    payload: obj
                })
            })
            .catch((error) => {
                console.log("ERRORE", error);
            });
    }
}
export const putFetch = (token,oggetto) => {
    return (dispatch, getState) => {

        fetch(`https://striveschool-api.herokuapp.com/api/profile/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(
                oggetto
            )
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Problema nella chiamata API");
                }
            })
            .then((obj) => {
                dispatch({
                    type: PUT_FETCH,
                    payload: obj
                })
            })
            .catch((error) => {
                console.log("ERRORE", error);
            });
    }
}


