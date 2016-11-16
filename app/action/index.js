const fetchCatagory = ()=> ({
  type:'FETCH_CATAGORY'
});
const fetchedCatagory = (data) => ({
  type: 'FETCHED_CATAGORY',
  payload: data
});

const fetchLogo = () => ({
  type: 'FETCH_LOGO'
});
const fetchedLogo = (data) => ({
  type: 'FETCHED_LOGO',
  payload: data
});

const fetchPhoto = () => ({
  type: 'FETCH_PHOTO'
});
const fetchedPhoto = (data) => ({
  type: 'FETCHED_PHOTO',
  payload: data
});
const renderPhoto = (data) => ({
  type: 'RENDER_PHOTO',
  payload: --data
});

const fetchGallery = (year) => ({
  type: 'FETCH_GALLERY',
  payload: year
});

const fetchedPhotoByYear = (photos) => ({
  type: 'FETCHED_PHOTOS_BY_YEAR',
  payload: photos
});

const loadIndex = () => ({
  type: 'LOAD_INDEX'
});

const loadCatagory = (year) => ({
  type: 'LOAD_CATAGORY',
  payload: year
})

const fetchedError = (err) => ({
  type: 'FETCHED_ERROR',
  payload: err.message
});

export default {
  fetchCatagory,
  fetchedCatagory,
  fetchLogo,
  fetchedLogo,
  fetchPhoto,
  fetchedPhoto,
  renderPhoto,
  fetchGallery,
  loadIndex,
  loadCatagory,
  fetchedPhoto,
  fetchedError,
  fetchedPhotoByYear
}
