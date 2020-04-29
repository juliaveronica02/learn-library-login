const initialState = {
    viaLogin: '',
    viaLogin : localStorage.getItem('token')
}

const login = (state = initialState, action) =>{
    switch (action.type) {
        case 'LOGIN_LOGOUT':
            localStorage.removeItem('token');
            return {
                ...state, viaLogin: ''
            };

        case 'LOGIN_SUCCESS':
            localStorage.setItem('token', action.payload)
            return {
                ...state,
                viaLogin: action.payload
            };

        // case 'LOGIN_VIA_FACEBOOK':
        //     return {...state, viaLogin:action.payload}

        default:
            return state;
    }
}

export default login;