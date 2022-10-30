import React, {useState} from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar,Toolbar, Typography, InputBase, Box, InputLabel, MenuItem, FormControl, Select, Input } from "@material-ui/core";
import searchIcon from '@material-ui/icons/Search';
import useStyles from './HeaderStyles';

const Header = () => {
    const classes = useStyles();
    const [typ, setTyp] = useState('atrakcje');
    const [ocen, setOcen] = useState('Ocena');
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.toolbar}>
                    Pr.Zesp.Pcz (ph)
                </Typography>
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
                <img src="Icons\Png\Logo.png" height="100%"></img>
                
                <FormControl className={classes.formControl}>
                    <InputLabel>Typ</InputLabel>
                    <Select value={typ} onChange={(e) => setTyp(e.target.value)}>
                        <MenuItem value="aestauracje">Restauracje</MenuItem>
                        <MenuItem value="hotele">Hotele</MenuItem>
                        <MenuItem value="atrakcje">Atrakcje</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel>Ocena</InputLabel>
                    <Select value={ocen} onChange={(e) => setOcen(e.target.value)}>
                        <MenuItem value="0">All</MenuItem>
                        <MenuItem value="3">Powyzej 3.0</MenuItem>
                        <MenuItem value="4">Powyzej 4.0</MenuItem>
                        <MenuItem value="4.5">Powyzej 4.5</MenuItem>
                    </Select>
                </FormControl>
                
            </Toolbar>
        </AppBar>
    )
}
export default Header;