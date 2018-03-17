import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burgerbuilder-22a35.firebaseio.com/'
});

export default instance;