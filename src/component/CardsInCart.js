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
import {connect} from "react-redux"
import {RemoveFromCart,adjustQuantity} from "../redux/shopping/shopping-action"
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function CardsInCart(props) {
  const [input, setInput] = useState(props.qty)
  const theme = useTheme();
  const onChangehandler =(e)=>{
    setInput(e.target.value)
    
    props.adjustQuantity(props.id,e.target.value)

  }

  return (
    <Card sx={{ display: 'flex' }}>
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
        {/* <Typography  variant="subtitle" color="text.secondary" component="div">
          QTY : 
          </Typography> */}
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <RemoveOutlinedIcon /> : <RemoveOutlinedIcon />}
          </IconButton>
          
          <IconButton aria-label="play/pause">
          <TextField
          id="outlined-number"
          label="qty"
          type="number"
          value={input}
          InputLabelProps={{
            shrink: true,
            
          }}
          sx={{width:"80px"}}
          onChange={onChangehandler}
        />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <AddOutlinedIcon /> : <AddOutlinedIcon />}
          </IconButton>
          <IconButton aria-label="delete" onClick={()=>props.RemoveFromCart(props.id)}>
            {theme.direction === 'rtl' ? <DeleteIcon /> : <DeleteIcon />}
          </IconButton>
        </Box>
        
      </Box>
     
      
    </Card>
  );
}
const mapDispatchToProps =(dispatch)=>{
    return{
        RemoveFromCart : (id)=> dispatch(RemoveFromCart(id)),
        adjustQuantity : (id,value)=> dispatch(adjustQuantity(id,value))
    }
  
  }

  export default connect(null,mapDispatchToProps)(CardsInCart)