import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DropdownCard2 from './dropdownCardBrand';

export default function PopperPopupState() {
    const [style, setStyle] = useState({ display: 'none' });

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
                        SHOP BY BRAND <ArrowDropDownIcon />
                    </Button>
                    <Popper style={style}  {...bindPopper(popupState)} transition sx={{ marginRight: 30 }}>
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}>
                                <Paper>
                                    <DropdownCard2 />
                                </Paper>
                            </Fade>
                        )}
                    </Popper>
                </div>
            )}
        </PopupState>
    );
}
