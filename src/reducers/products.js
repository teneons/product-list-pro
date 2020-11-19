const initState = [];

export default function products(state = initState, action) {
  switch(action.type) {
    case 'ADD_PRODUCT': return[ ...state, action.payload ];
    case 'REMOVE_PRODUCT': state.slice(0, state.findIndex((item)=>item.id === action.payload)).concat(state.slice(state.findIndex((item)=>item.id === action.payload)+1));
    case 'SEARCH_PRODUCT': return state.filter(item => item.title.includes(action.payload));
    default: return state
  }
}