import React, { useState } from 'react';
import { connect } from 'react-redux';
// import FacebookLogin from 'react-facebook-login';

import { login } from './../../actioncreators/login'

const Index = (props) => {
    const [data, setData] = useState({
        email: 'ac@gmail.com',
        password: '1234'
    })
    const handleChange = (event) => {
        const { name, value } = event.currentTarget;
        setData({
            ...data, [name]: value
        })
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(data)
        props.login(data)
    }
    const componentClicked = () => {
        console.log('terklik')
    }

    const responseFacebook = (response) => {
        props.loginviaLogin(response);
    }


    return (
        <div>
            <h1>Login</h1>
            {/* <FacebookLogin
                appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                // autoLoad={true}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook}
            /> */}

            <form onSubmit={handleSubmit}>
                <label>
                    email: 
                    <input type="email" name="email" onChange={handleChange} value={data.email}/>
                </label>
                <br/>
                <label>
                    password : 
                    <input type="password" name="password" onChange={handleChange} value={data.password}/>
                </label>
                <br/>
                <button type="submit">Login</button>
                <button type="reset">reset</button>
            </form>

        </div>
    )
}

const mapDispatchToProps = { login };

export default connect(null, mapDispatchToProps)(Index);