import axios from 'axios';

export const fetchImages = async () => {
    const response = axios.get('https://agencyanalytics-api.vercel.app/images.json');
    return response;
};