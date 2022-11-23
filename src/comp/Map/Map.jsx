import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined"
import { Rating } from "@material-ui/lab";

import useStyles from "./MapStyles";
import { GoogleMap } from "@react-google-maps/api";
import { getPlacesData } from "../../api";


const Map = ({setCoords, setBounds, coords}) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-witdth: 600px');
    // const coords = {lat:50.807398327964584, lng:19.111692639912793};
    return(
        <div className={classes.mapContainer}>
            <GoogleMapReact 
                bootstrapURLKeys={{key: 'AIzaSyBVE-hyp2LtIF-YbAD92077BfnhXgGu0_M'}}
                defaultCenter={coords}
                center={coords}
                defaultZoom={12}
                margin={[50,50,50,50]}
                options={''}
                onChange={(e) => {
                    console.log(e);
                    setCoords({ lat:e.center.lat, lng: e.center.lng});
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw});
                }}
                // onChange={''} 
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    );
    
}
export default Map;