import axios from 'axios';

const token = localStorage.getItem('token');

const host = 'http://localhost:9090';
const baseURL = `${host}/api`;

const books = '/books';

const instance = axios.create({
  baseURL,
  headers: {
    Authorization: token ? `Token ${token}` : undefined
  }
});

export const staticURL = `${host}/static`;

export const detectives = async () => instance.get(`${books}/get-books`);
