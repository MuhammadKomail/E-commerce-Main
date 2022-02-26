import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { connect } from "react-redux"
import { RemoveFromCart, adjustQuantity } from "../redux/shopping/shopping-action"
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { addCartData, removeCartItem } from '../redux/shoppingCart/shopping-cart-actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function CardsInCart(props) {
  const [input, setInput] = useState(props.qty)
  const theme = useTheme();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onChangehandler = (e) => {
    setInput(e.target.value)
  }

  function addItem() {
    console.log(props.id)
    addCartData(dispatch, props.id)
    window.location.reload()
  }

  function removeItem() {
    console.log('Remove working')
    removeCartItem(dispatch, props.id)
    window.location.reload()
  }

  return (
    <Card sx={{ display: 'flex', marginTop: 2, marginBottom: 2 }} >
      <CardMedia
        component="img"
        sx={{ width: 131 }}
        image={props.pic}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>

        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {props.title}
          </Typography>
          <Typography pt={2} variant="h5" color="text.secondary" component="div">
            Price : {props.price}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous" onClick={removeItem}>
            {theme.direction === 'rtl' ? <RemoveOutlinedIcon /> : <RemoveOutlinedIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <TextField
              id="outlined-number"
              label="qty"
              disabled
              type="number"
              value={input}
              InputLabelProps={{
                shrink: true,

              }}
              sx={{ width: "80px" }}
              onChange={onChangehandler}
            />
          </IconButton>
          <IconButton aria-label="next" onClick={addItem}>
            {theme.direction === 'rtl' ? <AddOutlinedIcon /> : <AddOutlinedIcon />}
          </IconButton>
        </Box>

      </Box>


    </Card>
  );
}


export default CardsInCart