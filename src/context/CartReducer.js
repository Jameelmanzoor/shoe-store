const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];

    case 'REMOVE':
      return state.filter(item => item.id !== action.payload.id);

    case 'PAY':
      return [];

    default:
      return state;
  }
}
export default cartReducer;