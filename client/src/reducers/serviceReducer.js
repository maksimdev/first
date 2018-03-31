const initialState = [
    {id:1, name:'Service one', description:'One - popular service.', price:'10.00'},
    {id:2, name:'Service two', description:'Two - popular service.', price:'20.00'},
    {id:3, name:'Service three', description:'Three - popular service.', price:'30.00'}
  ]

function serviceReducer (state = initialState, action) {
  if ( action.type === 'GET_SERVICE_DATA' ) {
      return state
    }

  if (action.type === 'ADD_SERVICE') {
    return [
      ...state,
      action.payload
    ]
  }

  //only for current users service
  if (action.type === 'DELETE_SERVICE') {
    return [
      ...state.slice(0, action.payload),
      ...state.slice(action.payload + 1)
    ]
  }

  return state;
}
export default serviceReducer
