import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';

import Login from './Login';
import Profile from './Profile';

const Index = (props) => {
    const [view, setView] = useState();

    useEffect(() => {
        if (props.viaLogin){
            setView(<Profile/>)
        }else {
            setView(<Login/>)
        }

    }, [props.viaLogin])
    return (
        <>
        {view}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        viaLogin: state.login.viaLogin
    }
    
}

export default connect(mapStateToProps)(Index);