export const Plus = (paylode) => ({
    type:"PLUS",
    paylode
})

export const Minus = (paylode) => ({
    type:"MINUS",
    paylode
})

export const asncminus = num => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type :"Minustunk",
                paylode: num
            })
        }, 1000);
    }
}