//this data must come from the server and use middleware!
//
const initialState = [
    {id:1, name:'Eating cookies', description:'1 hour of eating cookies', time: new Date(2018, 3, 20, 10), price:'10.00'},
    {id:2, name:'Watching cookies', description:'2 hour of watching cookies', time: new Date(2018, 3, 25, 15), price:'20.00'},
    {id:3, name:'Thouching cookies', description:'3 hour of touching cookies', time: new Date(2018, 3, 30, 18), price:'30.00'}
  ]

export default function serviceReducer (state = initialState, action) {
  if ( action.type === 'GET_SERVICE_DATA' ) {
      return state
  }

  // if ( action.type === 'SET_SERVICE_DATA' ) {
  //     return action.payload
  // }

  if (action.type === 'ADD_SERVICE') {
    return [
      ...state,
      action.payload
    ]
  }

  // if (action.type === 'DELETE_SERVICE') {
  //   return [
  //     ...state.slice(0, action.payload),
  //     ...state.slice(action.payload + 1)
  //   ]
  // }

  return state;
}
