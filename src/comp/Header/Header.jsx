import React, {useState} from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar,Toolbar, Typography, InputBase, Box, InputLabel, MenuItem, FormControl, Select, Input } from "@material-ui/core";
import searchIcon from '@material-ui/icons/Search';
import useStyles from './styles';
const Header = () => {
    const classes = useStyles();
    const [typ, setTyp] = useState('atrakcje');
    const [ocen, setOcen] = useState('Ocena');
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.toolbar}>
                    Projekt Zespolowy
                </Typography>
                <img src="Icons\Png\Logo.png" height="100%"></img>
                <Box display="flex">
                    <Typography variant="h6" className={classes.toolbar}>
                    </Typography>
                    {/* <Autocomplete> */}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <searchIcon/>
                            </div>
                            <InputBase placeholder="Szukaj w Częstochowie" classes={{root:classes.inputRoot, input: classes.inputInput}}></InputBase>
                        </div>
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    )
}
export default Header;