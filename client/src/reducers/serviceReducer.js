const initialState = []

function serviceReducer (state = initialState, action) {
if (action.type === 'GET_SERVICE_LIST') {
    return [
      ...action.payload  //without ...state,because like as a+=a!
    ]
  }

  if (action.type === 'GET_ALL') {
      return [
          {id:1, name:'Service one', description:'One - popular service.', price:'10.00'},
          {id:2, name:'Service two', description:'Two - popular service.', price:'20.00'},
          {id:3, name:'Service three', description:'Three - popular service.', price:'30.00'}
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
