import * as React from 'react';
import { useState } from 'react';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DropdownCard from './dropdownCardCat';

export default function PopperPopupState() {
    const [style, setStyle] = useState({ display: 'none' });
    const [anchorEl, setAnchorEl] = React.useState(null);

    // const handlePopoverOpen = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    // const handlePopoverClose = () => {
    //     setAnchorEl(null);
    // };

    const open = Boolean(anchorEl);
    return (
        <PopupState variant="popper" popupId="demo-popup-popper">
            {(popupState) => (
                <div onMouseEnter={e => {
                    setStyle({ display: 'block', opacity: 2.7 });
                }}
                    onMouseLeave={e => {
                        setStyle({ display: 'none' })
                    }}>
                    <Button variant="" className='selectButton' {...bindToggle(popupState)}>
                        ALL CATEGORIES <ArrowDropDownIcon />
                    </Button>
                    <Popper style={style}  {...bindPopper(popupState)} transition sx={{ marginRight: 30 }}>
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}>
                                <Paper>
                                    <DropdownCard />
                                </Paper>
                            </Fade>
                        )}
                    </Popper>
                </div>
            )}
        </PopupState>
    );
}
