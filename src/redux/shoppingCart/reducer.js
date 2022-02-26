const INITIAL_STATE = {
    data: []
}




const cartDataReducer = (state = INITIAL_STATE, action) => 
{

    // console.log(action)
    if (action.type === 'SET_MY_CART_DATA') {
        return state.data = action.payload 
    }
    else{
        return state
    }
}


export { cartDataReducer }