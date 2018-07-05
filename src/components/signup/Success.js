import React from 'react';
import PropTypes from 'prop-types';
import { formValues } from 'redux-form';

const Success = ({ email }) => (
  <div>
    Successfully registered!
    Please check your email
    {' '}
    {email}
    {' '}
    for a confirmation link to activate your account.
  </div>
);

Success.propTypes = {
  email: PropTypes.string,
};

export default formValues({
  email: 'userinfo.email'
})(Success);
