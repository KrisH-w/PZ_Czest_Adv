import React, { useState, useEffect ,createRef } from "react";
import { CircularProgress, Grid, Typography, Select, Input, Card, MenuItem, FormControl, InputLabel } from "@material-ui/core";

import PlaceDetails from '../PlaceDetails/PlaceDetails'
import useStyles from "./styles";


const List = ({places, type, setType, rating, setRating, childClicked, isLoading}) => {
    const [elRefs, setElRefs] = useState([]);
    const classes = useStyles();
    useEffect(() => {
        setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
      }, [places]);
    // const places = [
    //     {name:'Atrakcja 1'},
    //     {name:'Atrakcja 2'},
    //     {name:'Atrakcja 3'},
    //     {name:'Atrakcja 4'},
    //     {name:'Atrakcja 5'},
    //     {name:'Atrakcja 6'},
    // ];

    return (
    //     <div className={classes.container}>
            
    //         <Grid container spacing={3} className={classes.List}>
    //             {places?.map((place, i) => (
    //                 <Grid item key ={i} xs={12}>
    //                     <PlaceDetails place={place}/>
    //                 </Grid>
    //             ))}
    //         </Grid>

    //     </div>
    // );

    <div className={classes.container}>
      <Typography variant="h4">Miejsca obok ciebie</Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel id="type">Type</InputLabel>
            <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restauracje</MenuItem>
              <MenuItem value="hotels">Hotele</MenuItem>
              <MenuItem value="attractions">Atrakcje</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="rating">Ocena</InputLabel>
            <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Powyżej 3.0</MenuItem>
              <MenuItem value="4">Powyżej 4.0</MenuItem>
              <MenuItem value="4.5">Powyżej 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} key={i} item xs={12}>
                <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} place={place} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};
export default List;