const initState = [];

//func handler
export default function products(state = initState, action) {
  if(action.type === 'ADD_PRODUCT') {
    return[ ...state, action.payload ]
  } else if (action.type === 'REMOVE_PRODUCT') {
    return state;
  }
  return state
}