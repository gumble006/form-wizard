/* eslint-disable react/prop-types */
import React from 'react';
import { formValues } from 'redux-form';

const Confirm = ({ plan, email, username }) => {
  return (
    <div>
      <div className="form-group">
        <h3>
          Confirm your information
        </h3>
        <div style={{ margin: '3rem 2rem' }}>
          <dl className="row">
            <dt className="col-sm-4">
              Plan:
            </dt>
            <dd className="col-sm-8" style={{ textTransform: 'capitalize' }}>
              {plan}
            </dd>
          </dl>
          <dl className="row">
            <dt className="col-sm-4">
              Email Address:
            </dt>
            <dd className="col-sm-8">
              {email}
            </dd>
          </dl>
          <dl className="row">
            <dt className="col-sm-4">
              Username:
            </dt>
            <dd className="col-sm-8">
              {username}
            </dd>
          </dl>
        </div>
        <div style={{margin:'2rem'}}>
          <small>By signing up, you agree to our <a href="#">Policy</a> & <a href="#">Terms of Use</a>.</small>
        </div>
      </div>
    </div>
  )
};

export default formValues({
  plan: 'plan.plan',
  email: 'userinfo.email',
  username: 'userinfo.username',
})(Confirm);
