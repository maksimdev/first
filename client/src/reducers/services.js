const initialState = [
  'service_one',
  'service_two'
]

function serviceList (state = initialState, action) {
  if (action.type === 'ADD_SERVICE') {
    return [
      ...state,
      action.payload
    ]
  }
  return state;
}
