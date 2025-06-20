import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://bytejumpbackend-production.up.railway.app/api/v1'
});
