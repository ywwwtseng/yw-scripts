import Axios from 'axios';

const request = Axios.create({
  baseURL: process.env.NODE_ENV === 'development' 
    ? '/api'
    : process.env.REACT_APP_BASE_URL,
});

export default request;