import './App.css';
import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import { initializApp } from './redux/appReducer';
import { connect } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from './components/Users/UsersContainer';
import ProfileInfo from './components/Profile/ProfileInfo/ProfileInfo';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Loading from './components/common/Loading';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

class App extends React.Component {

  componentDidMount() {
    this.props.initializApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Loading />
    }
    return (
      <div className="app">
        <HeaderContainer />
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path="/dialogs" element={<Suspense fallback={<div> Loading... </div>}> <DialogsContainer /> </Suspense>} />
            <Route path="/profile/:id" element={<Suspense fallback={<div> Loading... </div>}> <ProfileContainer /> </Suspense>} />
            <Route path="/profile" element={<ProfileInfo />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}
export default connect(mapStateToProps, { initializApp })(App);
