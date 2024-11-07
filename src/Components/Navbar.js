import { AppBar, Toolbar, Typography } from '@mui/material';
import * as React from 'react';


const Navbar = () => {
    return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                </Toolbar>
            </AppBar>
    );
};

export default Navbar;