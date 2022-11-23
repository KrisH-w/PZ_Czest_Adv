import React , {useState, useEffect} from 'react';
import {getPlacesData} from './api';
import Header from './comp/Header/Header';
import List from './comp/List/List';
import Map from './comp/Map/Map';

import {
    CssBaseline, Grid
} from '@material-ui/core';
const App = () => {

    const [places, setPlaces] = useState([]);

    const [coords, setCoords] = useState({lat:50.807398327964584, lng:19.111692639912793});
    const [bounds, setBounds] = useState({});


    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(({coords: {latitude,longitude} }) => {
    //         setCoords({lat: latitude, lng: longitude});
    //     })
    // }, []);

    useEffect(() => {
        getPlacesData(bounds.sw, bounds.ne)
            .then((data) => {
                console.log(data);
                setPlaces(data);
            })
    }, [coords, bounds]);

    return (
        <>
            <CssBaseline/>
            <Header/>
            <Grid container spacing={3} style={{width: '100%'}}>
                
                <Grid item xs={12} md={8}>
                    <Map
                        setCoords = {setCoords}
                        setBounds = {setBounds}
                        coords = {coords}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <List places={places}/>
                </Grid>
                
            </Grid>
        </>
    );
}

export default App;