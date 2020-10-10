const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      if (!state.find(item => item.id === action.payload.id)) {
        return [...state, action.payload];
      } else { return [...state]; }

    case 'REMOVE':
      return state.filter(item => item.id !== action.payload.id);

    case 'PAY':
      return [];

    default:
      return state;
  }
}
export default cartReducer;