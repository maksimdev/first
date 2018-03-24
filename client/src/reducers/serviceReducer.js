const initialState = []

function serviceReducer (state = initialState, action) {
if (action.type === 'GET_SERVICE_LIST') {
    return [
      ...action.payload  //without ...state,because like as a+=a!
    ]
  }
  // if (action.type === 'ADD_SERVICE') {
  //   return [
  //     ...state,
  //     action.payload
  //   ]
  // }
  return state;
}
export default serviceReducer
