import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SHOW_MODAL } from '../actions/types';
import { submitSignup } from '../api';
import './App.css';

import Header from './header/Header';
import Hero from './Hero';
import ModalRoot from './ModalRoot';

import SignUp from './signup/SignUp';
import Success from './signup/Success';
import UserInfo from './signup/UserInfo';
import Plan from './signup/Plan';
import Confirm from './signup/Confirm';
import { asyncValidate } from './signup/validations';


const App = ({ showModal }) => (
  <div className="App">
    <Header showModal={showModal} />
    <Hero showModal={showModal} />
    <ModalRoot>
      <SignUp
        pages={[
          <Plan key="1" section="plan" />,
          <UserInfo key="2" section="userinfo" />,
          <Confirm key="3" />,
        ]}
        confirmation={<Success />}
        asyncValidate={asyncValidate}
        form={'signup'}
        initialValues={{ 'plan': { plan: 'premium' } } }
        asyncBlurFields={['userinfo.username', 'userinfo.email']}
      />
    </ModalRoot>
  </div>
);

App.propTypes = {
  showModal: PropTypes.func,
};

function mapDispatch(dispatch) {
  return {
    showModal() {
      dispatch({
        type: SHOW_MODAL,
        payload: {
          modalProps: { submitSignup },
        },
      });
    },
  };
}

export default connect(null, mapDispatch)(App);
