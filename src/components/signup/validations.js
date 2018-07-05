/* eslint-disable no-throw-literal */
import { validateNewUser } from '../../api';

export const required = value => (value || typeof value === 'number' ? undefined : 'Required');

export const email = value => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ? 'Invalid email address'
  : undefined);

export const alphaNumeric = value => value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined;

export const asyncValidate = (values, dispatch, props, blurredField) => {
  const formSection = blurredField.split('.')[0];
  const fieldName = blurredField.split('.').pop();
  const query = { [fieldName]: values[formSection][fieldName] };

  return validateNewUser(query).then((resp) => {
    if (!resp.data.available) {
      throw {
        [formSection]: { [fieldName]: `That ${fieldName} is taken` }
      };
    }
  });
};
