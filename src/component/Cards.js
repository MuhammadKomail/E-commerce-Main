
import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



export default function Cards(props) {

  const [isShown, setIsShown] = useState(false);
  let pic1 = props.pic
  let pic2 = props.pic2
  let newtag = props.new
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 0, pb: 1, borderColor: "white" }}>
      <CardActionArea onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
        <CardMedia
          component="img"
          height="50%"
          image={isShown ? pic2 : pic1}
          alt="green iguana"


        />{!!newtag ? <Box
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            width: '35px',
            height: "35px",
            bgcolor: 'rgba(0, 0, 0, 0.54)',
            color: 'white',
            padding: '10px',
            borderRadius: "100px",
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >

          <Typography variant="body2">NEW</Typography>
        </Box> : null}
      </CardActionArea>

      <CardContent sx={{ borderColor: "white" }}>
        <Typography sx={{ fontWeight: 'bold' }} variant="subtitle2" color="text.secondary">
          {props.title}
        </Typography>
        <Typography variant="button" color="text.secondary">
          Price : {props.price}
        </Typography>
      </CardContent>
      <div className='center1'>
        <Button onClick={props.onClick} variant="outlined" style={{ color: "gray", borderColor: "lightgray", borderRadius: 0, alignItems: "center", alignContent: "center" }} size="small" endIcon={<ShoppingCartIcon />}>Add to Cart</Button>
      </div>


    </Card>
  );
}
