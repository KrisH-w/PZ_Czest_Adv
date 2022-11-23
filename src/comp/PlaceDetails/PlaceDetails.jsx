import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import { Rating } from "@material-ui/lab/Rating";
import usedStyles from "./styles";
const PlaceDetails = ({place}) => {
    const classes = usedStyles();
    return (
        <Card elevation={6}>
            <CardMedia 
                style={{height:350}}
                image={place.photo ? place.photo.images.large.url:'https://www.lakesuperior.com/downloads/7150/download/401pc.bhm4.jpg?cb=d3cb515709b1e3b0279c0d06bae8c4b4&w=1200'}
                title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">{place}</Typography>
            </CardContent>
        </Card>
    );
}
export default PlaceDetails;