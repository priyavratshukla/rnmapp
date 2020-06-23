import rickyandmortyApi from '../apis/rickyandmortyApi';

export const fetchCharacters = () => async dispatch => {
  const response = await rickyandmortyApi.get('/');
  dispatch({ type: 'FETCH_CHARACTERS', payload: response.data });
  //console.log('rickyandmortyApi====', response.data.results );
};

