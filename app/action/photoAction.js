import axios from "axios";

const fetchIndexPhotos = () => {
	return axios.get("http://localhost:10630/getIndexPhoto");
}

export default {
	fetchIndexPhotos
}
