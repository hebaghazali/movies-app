import axiosInstance from '../../axiosConfig';

export default function getMovies(pageNum = 1) {
  return dispatch => {
    axiosInstance
      .get('/movie/popular?&page=' + pageNum)
      .then(res => dispatch({ type: 'GET_MOVIES', payload: res.data.results }))
      .catch(err => console.log(err));
  };
}
