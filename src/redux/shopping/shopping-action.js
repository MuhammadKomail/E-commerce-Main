import * as actionTypes from "./shopping-types"

export const addToCart = (productID)=>{
    return{
        type: actionTypes.ADD_TO_CART,
        payload:{
            id:productID,
        }
    }

}

export const RemoveFromCart = (productID)=>{
    return{
        type: actionTypes.REMOVE_FROM_CART,
        payload:{
            id:productID,
        }
    }

}

export const adjustQuantity = (productID,value)=>{
    return{
        type: actionTypes.ADJUST_QUANTITY,
        payload:{
            id:productID,
            qty: value,
        }
    }

}

