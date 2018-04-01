//this data must come from the server and use middleware!
//
const initialState = [
    {id:1, name:'Eating cookie', description:'1 hour of eating cookies', time: new Date(2018, 3, 1, 12), price:'10.00'},
    {id:2, name:'Watching at cookie', description:'1 hour of watching at cookies', time: new Date(2018, 3, 1, 13), price:'20.00'},
    {id:3, name:'Thouching at cookie', description:'1 hour of touching at cookies', time: new Date(2018, 3, 1, 14), price:'30.00'}
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

  //only for current users service(CHECK USER)
  if (action.type === 'DELETE_SERVICE') {
    return [
      ...state.slice(0, action.payload),
      ...state.slice(action.payload + 1)
    ]
  }

  return state;
}
export default serviceReducer
