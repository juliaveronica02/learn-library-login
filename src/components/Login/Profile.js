import React from 'react';
import { connect } from 'react-redux';
const Index = (props) => {
    return (
        <div>
            ini profile
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        viaLogin: state.login.viaLogin
    }
}

export default connect(mapStateToProps)(Index);