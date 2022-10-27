import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined"
import { Rating } from "@material-ui/lab";

import useStyles from "./MapStyles";
import { GoogleMap } from "@react-google-maps/api";

const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-witdth: 600px');
    const coords = {lat:50.807398327964584, lng:19.111692639912793};
    return(
        <div className={classes.mapContainer}>
            <GoogleMapReact 
                bootstrapURLKeys={{key: 'AIzaSyDVJnrVgYSZAMmaaHUef33L41LE-SIWU6Q'}}
                defaultCenter={coords}
                center={coords}
                defaultZoom={12}
                margin={[50,50,50,50]}
                options={''}
                onChange={''}
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    );
    
}
export default Map;