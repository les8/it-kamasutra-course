import React from 'react';
import Header from './header';
import './header.scss';
import { connect } from 'react-redux';
import { logout } from '../../redux/authReducer';

class HeaderContainer extends React.Component {    
    render () {
        return <Header {...this.props}/>
    };     
};

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, { logout })(HeaderContainer);