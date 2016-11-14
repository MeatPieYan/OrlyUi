import axios from 'axios';

const getCatagories = () => {
  return axios.get('http://localhost:10630/getCatagoryList');
}

const getLogo = () => {
  return axios.get('http://localhost:10630/getLogo');
}

export default {
  getCatagories,
  getLogo
}
