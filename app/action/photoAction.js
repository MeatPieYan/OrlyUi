import axios from "axios";

import config from '../config';

const fetchIndexPhotos = () => {
	return axios.get('http://' + config.serverUrl + '/getIndexPhoto');
}

const fetchPhotosByYear = (year=2014) => {

	return axios.get('http://' + config.serverUrl + '/getPhotosByYear/' + year);
}

export default {
	fetchIndexPhotos,
	fetchPhotosByYear
}
