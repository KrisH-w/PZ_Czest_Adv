import React, { useState } from "react";
import { CircularProgress, Grid, Typography, Select, Input, Card } from "@material-ui/core";

import PlaceDetails from '../PlaceDetails/PlaceDetails'
import useStyles from "./styles";


const List = () => {
    const classes = useStyles();

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