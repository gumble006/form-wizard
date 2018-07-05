/* eslint-disable react/prop-types */
import React from 'react';
import { Field, FormSection } from 'redux-form';
import { required, email, alphaNumeric } from './validations';

const formFields = [
  {
    label: 'User name', name: 'username', placeholder: 'Choose a username', validations: [required, alphaNumeric],
  },
  {
    label: 'Password', type: 'password', name: 'password', placeholder: 'Choose a password', validations: [required],
  },
  {
    label: 'Email', name: 'email', placeholder: 'Provide your email', validations: [required, email],
  },
];

const formField = ({
  input, label, placeholder, type, meta: { error, touched },
}) => (
  <div className="form-group">
    <label htmlFor={input.name}>
      {label}
    </label>
    <input {...input} id={input.name} type={type} style={{ marginBottom: '5px' }} className="form-control" placeholder={placeholder} />
    <div className="red-text" style={{ marginBottom: '20px' }}>
      {touched && error && (
        <span>
          <svg id="i-alert" viewBox="0 0 32 32" width="12" height="12" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M16 3 L30 29 2 29 Z M16 11 L16 19 M16 23 L16 25" />
          </svg>
          {' '}
          {error}
        </span>
      )}
    </div>
  </div>
);

const renderFields = () => formFields.map((field) => {
  const { label, name, placeholder, validations, type } = field;
  return (
    <Field
      key={name}
      component={formField}
      type={type || 'text'}
      label={label}
      name={name}
      validate={[...validations]}
      placeholder={placeholder}
    />
  )
});

const UserInfo = () => (
  <div>
    <h3>
      Get started with a free account.
    </h3>
    <p>
      Find your people. Engage your customers. Build
      your organization or group. Do it all with our tools.
    </p>

    <FormSection name="userinfo" className="form-section">
      {renderFields()}
    </FormSection>
  </div>
);

export default UserInfo;
