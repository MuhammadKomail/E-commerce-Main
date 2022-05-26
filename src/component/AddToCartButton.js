import React, { useEffect, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';





export const AddToCartButton = (props) => {

    const {onClickHandle,cardData} = props
    const {cart,loading} = useSelector(state=>state.cartDataReducer)


    const [isDisabled, setIsDisabled ] = React.useState(false)

    const checkQuantity = () => {
        const findInd = cart.find((e)=>e.id === cardData._id)
        if(findInd){
            if(findInd.qty >= cardData.quantity){
                setIsDisabled(true)
                console.log('Quantity exceeded!')
            }
            else{
                setIsDisabled(false)
            }
        }
    }


    const addItemClickHandle = () => {
        const findInd = cart.find((e)=>e.id === cardData._id)
        if(findInd){
            if(findInd.qty === cardData.quantity){
                setIsDisabled(true)
                swal({
                    title: "Sorry",
                    text: "Quantity exceeded!",
                    icon: "warning",
                    button: "ok!",
                  });
            }
            else{
                onClickHandle()
                setIsDisabled(false)
            }
        }
        else{
            onClickHandle()
        }
    }



    React.useEffect(() => {
        checkQuantity()
    }, [])
    


  return (
    <div className='center1'>
        <Button className='leftViewSevenBtn' variant="contained" onClick={addItemClickHandle}  style={{ color: "gray", borderColor: "lightgray", borderRadius: 0, alignItems: "center", alignContent: "center" }} size="small" endIcon={<ShoppingCartIcon />}>Add to Cart</Button>
      </div>
  )
}
