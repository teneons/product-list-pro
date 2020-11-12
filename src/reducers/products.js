const initState = [];

//func handler
export default function products(state = initState, action) {
  if(action.type === 'ADD_PRODUCT') {
    console.log(state)
    return[ ...state, action.payload ]
  } else if (action.type === 'REMOVE_PRODUCT') {
    const id = state.findIndex((item)=>item.id === action.payload);
    return state.slice(0, id).concat(state.slice(id+1));
  }
  return state
}