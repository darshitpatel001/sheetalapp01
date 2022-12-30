export const Plus = (paylode) => ({
  type: "PLUS",
  paylode,
});

export const Minus = (paylode) => ({
  type: "MINUS",
  paylode,
});

export const getUserListStarted = () => ({
    type: 'Started',
    
  })
  
  export const getUserListSuccess = (payload) => ({
    type: 'GET_USER_SUC',
    payload
  })
  
  export const getUserListFailure = (payload) => ({
    type: 'GET_USER_FAILED',
    payload
  })

export const asncminus = (num) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: "Minustunk",
        paylode: num,
      });
    }, 1000);
  };
};

export const Userasnc =
  (page = 1) =>
  async (dispatch) => {
    dispatch(getUserListStarted());
    try {
      const res = await fetch(`https://reqres.in/api/users?page=${page}`);
      const data = await res.json();
      dispatch(getUserListSuccess(data));
    } catch (err) {
      dispatch(getUserListFailure(err.message));
    }
  };
