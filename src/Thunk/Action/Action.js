export const Plus = (paylode) => ({
    type:"PLUS"
})

export const Minus = (paylode) => ({
    type:"MINUS"
})

export const asncminus = num => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type :"MINUS",
                paylode
            })
        }, 1000);
    }
}