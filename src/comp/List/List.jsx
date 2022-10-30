import React, { useState } from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Input, Card } from "@material-ui/core";

import PlaceDetails from '../PlaceDetails/PlaceDetails'
import useStyles from "./styles";

const List = () => {
    const classes = useStyles();
    const [typ, setTyp] = useState('atrakcje');
    const [ocen, setOcen] = useState('');

    const places = [
        {name:'Atrakcja 1'},
        {name:'Atrakcja 2'},
        {name:'Atrakcja 3'},
        {name:'Atrakcja 4'},
        {name:'Atrakcja 5'},
        {name:'Atrakcja 6'},
    ];
    return (
        <div className={classes.container}>
            <Typography variant="h4">Atrakcje</Typography>
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
            <Grid container spacing={3} className={classes.List}>
                {places?.map((place, i) => (
                    <Grid item key ={i} xs={12}>
                        <PlaceDetails place={place}/>
                    </Grid>
                ))}
            </Grid>

            

        </div>
    );
}
export default List;