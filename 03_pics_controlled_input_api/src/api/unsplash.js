import axios from 'axios';
import unsplash from '../keys/unsplash';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${unsplash.access}`,
  },
});
