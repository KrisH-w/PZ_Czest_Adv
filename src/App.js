import React , {useState, useEffect} from 'react';
import { getPlacesData } from './api';
import Header from './comp/Header/Header';
import List from './comp/List/List';
import Map from './comp/Map/Map';

import {
    CssBaseline, Grid
} from '@material-ui/core';
const App = () => {
    
    const [type, setType] = useState('attractions');
    const [rating, setRating] = useState('');

    // const [weatherData, setWeatherData] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);

    const [autocomplete, setAutocomplete] = useState(null);
    const [childClicked, setChildClicked] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const [places, setPlaces] = useState([]);

    const [coords, setCoords] = useState({lat:50.807398327964584, lng:19.111692639912793});
    const [bounds, setBounds] = useState({});


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude,longitude} }) => {
            setCoords({lat: latitude, lng: longitude});
        })
    }, []);

    
    useEffect(() => {
        const filtered = places.filter((place) => Number(place.rating) > rating);
    
        setFilteredPlaces(filtered);
      }, [rating]);
    
    // useEffect(() => {
    //     getPlacesData(bounds.sw, bounds.ne)
    //         .then((data) => {
    //             console.log(data);
    //             setPlaces(data);
    //         })
    // }, [coords, bounds]);
    useEffect(() => {
        if (bounds) {
          setIsLoading(true);
    
          // getWeatherData(coords.lat, coords.lng)
          //   .then((data) => setWeatherData(data));
    
          getPlacesData(type, bounds.sw, bounds.ne)
            .then((data) => {
              setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
              setFilteredPlaces([]);
              setRating('');
              setIsLoading(false);
            });
        }
    }, [bounds, type]);

    const onLoad = (autoC) => setAutocomplete(autoC);

    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();
    
        setCoords({ lat, lng });
    };
    return (
        <>
            <CssBaseline/>
            <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Map
                        setChildClicked={setChildClicked}
                        setCoords = {setCoords}
                        setBounds = {setBounds}
                        coords = {coords}
                        places={filteredPlaces.length ? filteredPlaces : places}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <List 
                        isLoading={isLoading}
                        childClicked={childClicked}
                        places={filteredPlaces.length ? filteredPlaces : places}
                        type={type}
                        setType={setType}
                        rating={rating}
                        setRating={setRating}
                    />
                </Grid>
                
            </Grid>
        </>
    );
};

export default App;