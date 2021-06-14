import axios from 'axios';
import { API_URL } from './config';
const host = window.location.hostname;


export const api = axios.create({
  
  baseURL: `https://${host}:3333`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

export const apiWithToken =(token) => (
  axios.create(
    {
      baseURL: `https://${host}:3333`,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }
  )
);

