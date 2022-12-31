export const Plus = (paylode) => ({
  type: "PLUS",
  paylode,
});

export const Minus = (paylode) => ({
  type: "MINUS",
  paylode
});
export const Milt = (paylode) => ({
  type: "MULTI",
  paylode
});
export const Div = (paylode) => ({
  type: "DEV",
  paylode
});

export const getUserListStarted = (payload) => ({
    type: 'Started',
    payload
  })
  
  export const getUserListSuccess = (payload) => ({
    type: 'USER_SUCCESS',
    payload
  })
  
  export const getUserListFailure = (payload) => ({
    type: 'USER_FAILED',
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
      const dataa = await fetch(`https://reqres.in/api/users?page=${page}`);
      const data = await dataa.json();
      dispatch(getUserListSuccess(data));
    } catch (err) {
      dispatch(getUserListFailure(err.message));
    }
  };
