import axios from 'axios';

export const validateNewUser = query => axios.get('/validateUser', {
  params: query,
});

export const submitSignup = values => axios.post('/users', values);
