import * as React from 'react';
import Box from '@mui/material/Box';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ThemeProvider, makeStyles } from '@mui/styles';
import { grey } from '@mui/material/colors';

export default function DropDown(props) {
  
  return (
    <Box sx={{ minWidth: 120 }}>
     <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={props.value}
          onChange={props.onClick}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          // className={classes.root}
          
        >
          <MenuItem value="">
            <em>none</em>
          </MenuItem>
          <MenuItem value={1}>low to high</MenuItem>
          <MenuItem value={2}>high to low</MenuItem>
          {/* <MenuItem value={20}>Product Name</MenuItem>
          <MenuItem value={30}>Quantity</MenuItem> */}
        </Select>
        
      </FormControl>
    </Box>
  );
}
