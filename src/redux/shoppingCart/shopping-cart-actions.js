const myCartData = 'myCartData'

export const getLocalcartData = async (dispatch) => {
    const StoredcartData = await JSON.parse(localStorage.getItem(myCartData))
    if (StoredcartData) {
        if (StoredcartData.length !== 0) {
            dispatch({
                type: 'SET_MY_CART_DATA',
                payload: StoredcartData
            })
        }else{
            dispatch({
                type: 'SET_MY_CART_DATA',
                payload: []
            })
        }
    }else{
        dispatch({
            type: 'SET_MY_CART_DATA',
            payload: []
        })
    }
}


export const addCartData = async (dispatch, id) => {

    const StoredcartData = await JSON.parse(localStorage.getItem(myCartData))
    if (StoredcartData) {
        if (StoredcartData.length !== 0) {
            const findObj = StoredcartData.find((e) => e.id === id)
            if (findObj) {
                findObj.qty = findObj.qty + 1
                localStorage.setItem(myCartData, JSON.stringify(StoredcartData))
                dispatch({
                    type: 'SET_MY_CART_DATA',
                    payload: StoredcartData
                })
            }
            else {
                const data = {
                    id: id,
                    qty: 1
                }
                StoredcartData.push(data)
                localStorage.setItem(myCartData, JSON.stringify(StoredcartData))
                dispatch({
                    type: 'SET_MY_CART_DATA',
                    payload: StoredcartData
                })
            }
        }
        else {
            const dataArr = []
            const data = {
                id: id,
                qty: 1
            }
            dataArr.push(data)
            localStorage.setItem(myCartData, JSON.stringify(dataArr))
            dispatch({
                type: 'SET_MY_CART_DATA',
                payload: dataArr
            })
        }
    } else {
        const dataArr = []
        const data = {
            id: id,
            qty: 1
        }
        dataArr.push(data)
        localStorage.setItem(myCartData, JSON.stringify(dataArr))
        dispatch({
            type: 'SET_MY_CART_DATA',
            payload: dataArr
        })
    }
}



    export const removeCartItem = async (dispatch, id) => {

        const StoredcartData = await JSON.parse(localStorage.getItem(myCartData))

        if (StoredcartData.length !== 0) {
            const findObj = StoredcartData.find((e) => e.id === id)

            if (findObj) {
                if (findObj.qty > 1) {
                    findObj.qty = findObj.qty - 1
                    dispatch({
                        type: 'SET_MY_CART_DATA',
                        payload: StoredcartData
                    })
                    localStorage.setItem(myCartData, JSON.stringify(StoredcartData))
                }
                else if (findObj.qty === 1) {
                    const updatedCartData = StoredcartData.filter((e) => e.id !== id)
                    localStorage.setItem(myCartData, JSON.stringify(updatedCartData))
                    dispatch({
                        type: 'SET_MY_CART_DATA',
                        payload: updatedCartData
                    })
                }
            }

        }

    }

    export const CHANGE_PRICE = (dispatch,value)=>{
        dispatch({
            type: "CHANGE_PRICE",
            payload:value
        })
    }