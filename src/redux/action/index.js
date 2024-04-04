export const PUT_TOKEN = 'PUT_TOKEN';
export const GET_FETCH = 'GET_FETCH';
export const GET_ESPERIENZE = 'GET_ESPERIENZE';
export const PUT_FETCH = 'PUT_FETCH';
export const PUT_IMG = 'PUT_IMG';

// export const POST_ESPERIENZA = 'POST_ESPERIENZA';





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
// per profilo header
export const putFetch = (token, oggetto) => {
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

export const putImg = (token, id, formData) => {
    return (dispatch, getState) => {
        fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}/picture`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
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
// per esperienza
export const putImgEsperienza = (token, id, formData,idExp) => {
    return (dispatch, getState) => {
        fetch(` https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${idExp}/picture`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Problema nella chiamata API");
                }
            })
            .then((obj) => {
              
                dispatch(getAllesperienze(token,id))
                })

            
            .catch((error) => {
                console.log("ERRORE", error);
            });

    }
}

export const postEsperienza = (token, id, oggetto,formData) => {
    return (dispatch, getState) => {
        fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body:JSON.stringify( oggetto)
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Problema nella chiamata API");
                }
            })
            .then((obj) => {
                console.log("exp",obj)
               dispatch( putImgEsperienza(token,id,formData,obj._id))

            })
            .catch((error) => {
                console.log("ERRORE", error);
            });

    }
}
export const getAllesperienze = (token,id) => {
    return (dispatch, getState) => {

        fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`, {
            headers: {
                Authorization: `Bearer ${token}` // Sostituisci "yourTokenVariable" con la variabile che contiene il token
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
                    type: GET_ESPERIENZE,
                    payload: obj
                })
            })
            .catch((error) => {
                console.log("ERRORE", error);
            });
    }
}


