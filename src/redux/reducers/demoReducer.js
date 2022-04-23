const initialState = {
  count: 1,
};

const demoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      state.count += 1;
      console.log(state);
      return {...state};
    case "DECREMENT":
        state.count -=action.payload.numberDecrement;
        return {...state}
    default:
      return  {...state};
  }
};
export default demoReducer;
