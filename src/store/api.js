import axios from 'axios';
const api = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL });

const formDataURL = ['user/change-profile-pic'];
api.interceptors.request.use((req) => {
  let userTokenData;
  try {
    userTokenData = JSON.parse(localStorage.getItem('userToken'));
  } catch (error) {
    userTokenData = null;
  }
  let token = userTokenData && userTokenData.token ? userTokenData.token : null;
  req.headers['Content-Type'] = 'application/json';
  // console.log('req.url', req.url);
  if (formDataURL.includes(req.url)) {
    req.headers['Content-Type'] = 'multipart/form-data';
  }
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && [401, 403].includes(error.response.status)) {
      localStorage.removeItem('userToken');
    }
    return Promise.reject(error);
  }
);

export default api;
