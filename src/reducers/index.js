import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

import modalReducer from './modalReducer';

export default combineReducers({
  modal: modalReducer,
  form: reduxForm,
});
