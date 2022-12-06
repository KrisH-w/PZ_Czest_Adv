import React from "react";
import GoogleMapReact from "google-map-react";
import { GoogleMap } from "@react-google-maps/api";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined"
import { Rating } from "@material-ui/lab";

import useStyles from "./MapStyles";
import mapStyles from '../../mapStyles';
import { getPlacesData } from "../../api";


const Map = ({setCoords, setBounds, coords , places , setChildClicked}) => {
    const classes = useStyles();
    const matches = useMediaQuery('(min-witdth: 600px');
    // const coords = {lat:50.807398327964584, lng:19.111692639912793};
    return(
        <div className={classes.mapContainer}>
            <GoogleMapReact 
                bootstrapURLKeys={{key: ''}}
                defaultCenter={coords}
                center={coords}
                defaultZoom={13}
                margin={[50,50,50,50]}
                options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
                onChange={(e) => {
                    console.log(e);
                    setCoords({ lat:e.center.lat, lng: e.center.lng});
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw});
                }}
                // onChange={''} 
                onChildClick={(child) => setChildClicked(child)}
            >
                {places.length && places.map((place, i) => (
                <div
                    className={classes.markerContainer}
                    lat={Number(place.latitude)}
                    lng={Number(place.longitude)}
                    key={i}
                >
                    {!matches
                    ? <LocationOnOutlinedIcon color="primary" fontSize="large" /> : (
                        <Paper elevation={3} className={classes.paper}>
                            <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                            <img
                                className={classes.pointer}
                                src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                            />
                            <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                        </Paper>
                    )}
                </div>
                ))}
            </GoogleMapReact>
        </div>
    );
};
export default Map;