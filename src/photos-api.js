import axios from 'axios';

axios.defaults.baseURL ='https://api.unsplash.com'

export const fetchPhotos = async (topic , page=1) => {
  const response = await axios.get(
    "/search/photos", {
        params: {
            client_id: 'rkuKhnLu5_PAVavFcWZ4HbqAhILd_NUtDVlSOSk53po',
            query: topic,
            per_page: 9,
            page,
        },

    });
    const images = response.data.results;
    const total = response.data.total_pages;
    
  return [images, total];
};




