import axios from 'axios';
import config from '../config';

const getCatagories = () => {
  return axios.get('http://' + config.serverUrl + '/getCatagoryList');
}

const getLogo = () => {
  return axios.get('http://' + config.serverUrl + '/getLogo');
}

export default {
  getCatagories,
  getLogo
}
