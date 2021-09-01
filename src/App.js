import React, {Component} from 'react';
import './App.scss';
import './nullstyle.scss';
import Nav from './components/nav/nav';
import DialogsContainer from './components/dialogs/dialogscontainer';
import News from './components/news/news';
import Music from './components/music/music';
import Settings from './components/settings/settings';
import { Route } from 'react-router-dom';
import UsersContainer from './components/users/userscontainer';
import ProfileContainer from './components/profile/profilecontainer';
import HeaderContainer from './components/header/headercontainer';
import Login from './components/login/login';
import { connect } from 'react-redux';
import { getAuth } from './redux/authReducer';
import { withRouter } from "react-router";
import { compose } from 'redux';
import Preloader from './components/common/preloader/preloader';

class App extends Component {
  componentDidMount() {
    this.props.getAuth();
  };
  render() {
    if (!this.props.initialized) {
      <Preloader />
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Nav />
        <div className='app-wrapper__content'>
          <Route path='/profile/:userId?' render={ () => <ProfileContainer />} />
          <Route path='/users' render={ () => <UsersContainer />} />
          <Route path='/dialogs' render={ () => <DialogsContainer />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          <Route path='/login' render={ () => <Login />} />
        </div>      
      </div>
    );
  };  
};

let mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default compose(
  withRouter,
  connect(mapStateToProps, {getAuth}))(App);