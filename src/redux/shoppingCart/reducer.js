const INITIAL_STATE = {
    cart: [],
    loading:false,
    price : true
}




const cartDataReducer = (state = INITIAL_STATE, {type,payload}) => 

{
    if (type === 'SET_MY_CART_DATA') {
        return {...state,loading:false, cart:payload}
    }
    else if (type === 'CHANGE_PRICE'){
        return {
            ...state,
            price:payload
        }
    }
    else{
        return state
    }
}


export { cartDataReducer }