const initialState = {
    data :[],
    isLoading :false,
    error:{}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'FETCH_POSTS_SUCCESS':
    return { ...state, isLoading : false, data : payload}

    case 'FETCH_POSTS_FAILD':
    return { ...state, isLoading : false, error : payload}

     case 'REQUEST_POST':
    return { ...state, isLoading : false, error : payload}

  default:
    return state
  }
}
