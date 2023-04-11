import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const userCreateService = async () => {
  const result = await axios.post('users/signup', {
    name: 'david',
    email: 'david@gmail.com',
    password: '123567788',
  });
  return result;
};

export const userLoginService = async user => {
  const request = await axios.post('users/login', { user });
  return request;
};

export const fetchContactsService = async () => {
  const data = await axios.get('contacts');
  return data;
};

export const addContactService = async contact => {
  const data = await axios.post('contacts', { contact });
  return data;
};

export const deleteContactService = async id => {
  const data = await fetch(`contacts/${id}`);
  return data;
};
