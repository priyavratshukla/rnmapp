export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TERMS':
      return action.payload;
    default:
      return state;
  }
};
