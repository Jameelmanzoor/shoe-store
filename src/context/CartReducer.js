const cartReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      if (!state.find(item => item.id === action.payload.id)) {
        return [...state, action.payload];
      } else { return [...state] }

  }
}
export default cartReducer;