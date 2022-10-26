import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar,Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import searchIcon from '@material-ui/icons/Search';
import useStyles from './styles';
const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.toolbar}>
                    Projekt Zespolowy
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.toolbar}>
                        Wyszukaj w Czestochowie
                    </Typography>
                    {/* <Autocomplete> */}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <searchIcon/>
                            </div>
                            <InputBase placeholder="Wyszukaj .." classes={{root:classes.inputRoot, input: classes.inputInput}}></InputBase>
                        </div>
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    )
}
export default Header;