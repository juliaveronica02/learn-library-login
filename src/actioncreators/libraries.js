import axios from './../config/axios';

const url = '/libraries';

export const add = (data) => {
    
    return dispatch => {
        axios.post(url, data)
            .then((response)=> {
                dispatch({
                    type: 'LIBRARIES_ADD',
                    payload: response.data
                })
            })
            .catch((error) => {
                window.alert(`maaf belum bisa menyimpan data karena ${error.message}`);
            });
    }
    // return async(dispatch) => {
    //     const response = await axios.post(url, data);
    //     dispatch({ 
    //         type: 'LIBRARIES_ADD',
    //         payload: response.data
    //     })

    //     dispatch({ 
    //         type: 'LIBRARIES_HIDE_ADD'
    //     })
    // }
}

export const deleteData = (id) => {
    return async(dispatch) => {
        await axios.delete(`${url}/${id}`);
        
        dispatch({ 
            type: 'LIBRARIES_DELETE_DATA',
            payload: id
        });

        dispatch({ 
            type: 'LIBRARIES_HIDE_DELETE'
        });
    }
}

export const edit = (data) => {
    return async(dispatch) => {
        const response = await axios.put(`${url}/${data.id}`, data);
        dispatch({ 
            type: 'LIBRARIES_EDIT_DATA',
            payload: response.data
        })

        dispatch({ 
            type: 'LIBRARIES_HIDE_EDIT'
        })
    }
}

export const getData = (query) => {
    let pertanyaan;
    if (query){
        pertanyaan = {params: {title: query }}
    }
    return async(dispatch) => {
        try {
            const response = await axios.get(url, pertanyaan);
            dispatch({ 
                type: 'LIBRARIES_GET_DATA',
                payload: response.data
            })
        }
        catch(error){
            error && alert(`maaf, ada kesalahan di jaringan internet, ${error.message}`)
        }
    }
}

export const hideAdd = () => {
    return {
        type: 'LIBRARIES_HIDE_ADD'
    }
}

export const hideDelete = () => {
    return {
        type: 'LIBRARIES_HIDE_DELETE'
    }
}

export const hideEdit = () => {
    return {
        type: 'LIBRARIES_HIDE_EDIT'
    }
}

// export const search = (query) => {
//     return async(dispatch) => {
//         const response = await axios.get(url, {
//             params: {
//                 title: query
//             }
//         });
//         dispatch({ 
//             type: 'LIBRARIES_GET_DATA',
//             payload: response.data
//         })
//     }
// }

export const showAdd = () => {
    return {
        type: 'LIBRARIES_SHOW_ADD'
    }
}

export const showDelete = (data) => {
    return {
        type: 'LIBRARIES_SHOW_DELETE',
        payload: data
    }
}

export const showEdit = (data) => {
    return {
        type: 'LIBRARIES_SHOW_EDIT',
        payload: data
    }
}