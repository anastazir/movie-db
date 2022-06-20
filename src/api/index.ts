import axios from 'axios';
import { FetchData } from '../types/fetch';

const API = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' });

export const fetch_users = () => API.get<Array<FetchData>>("/users");
