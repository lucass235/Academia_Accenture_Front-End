const INITIAL_STATE = {
    items: [],
  };
  
  const ProductReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "PRODUCTS":
        console.log('PRODUCTS', action.payload);
        return { ...state, items: action.payload };
      default:
        return state;
    }
  };
  
  export default ProductReducer;