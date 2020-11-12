const initState = [];

export default function filterProducts(state = initState, action) {
  if(action.type === 'SEARCH_PRODUCT') {
    return action.payload
  } 
  return state
}