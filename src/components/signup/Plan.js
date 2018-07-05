import React from 'react';
import { Field, FormSection } from 'redux-form';
import './Plan.css';
import { required } from './validations';

const formFields = [
  {
    label: 'Premium',
    value: 'premium',
    info: '"Best"',
  },
  {
    label: 'Basic',
    value: 'basic',
    info: '"Better"',
  },
  {
    label: 'Economy',
    value: 'economy',
    info: '"Good"',
  },
];

/* eslint-disable-next-line react/prop-types */
const radioInput = ({ input, label, info }) => (
  <div className="d-flex plan">
    <label className="cell-label">
      <input {...input} type="radio" />
      <div className="cell">
        { label }
      </div>
    </label>
    <div className="plan-text">
      <span>{info}</span>
    </div>
  </div>
);

const renderFields2 = () => formFields.map((field) => {
  const { label, value, info } = field;
  return (
    <Field
      key={value}
      component={radioInput}
      type="radio"
      label={label}
      name="plan"
      info={info}
      validate={[required]}
      value={value}
    />
  )
});

const Plan = () => (
  <div>
    <h3>
      Choose a plan that&apos;s right for you.
    </h3>
    <p>
      Downgrade or upgrade at any time.
    </p>
    <FormSection name="plan" className="form-section">
      { renderFields2() }
    </FormSection>
  </div>
);

export default Plan;
