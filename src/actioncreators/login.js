import axios from 'axios';

//const url = `${process.env.REACT_APP_URL_SERVER}/login`;
const url = 'http://f7e564ed.ngrok.io'

export const login = (data) => {
    return async(dispatch) => {
        try {
            const response = await axios.post(`${url}/users/login`, data)
            console.log(response.data)
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: response.data
            })
        }
        catch(error){
            error && alert(`maaf, ada kesalahan di jaringan internet, ${error.message}`)
        }

    }

    
}

export const logout = () =>{
    return {
        type: 'LOGIN_LOGOUT'
    }
}

// export const loginviaLogin = (data) => {
//     return {
//         type: 'LOGIN_VIA_FACEBOOK',
//         payload: data
//     }
// }