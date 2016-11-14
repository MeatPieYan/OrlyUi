import axios from "axios";

import config from '../config';

const fetchIndexPhotos = () => {
	return axios.get('http://' + config.serverUrl + '/getIndexPhoto');
}

export default {
	fetchIndexPhotos
}
