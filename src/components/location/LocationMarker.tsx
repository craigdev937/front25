import React from "react";
import { Marker, useMap } from "react-leaflet";

type POS = {
    position: {
        lat: number,
        lng: number,
    }
};

export const LocationMarker = ({position}: POS) => {
    const map = useMap();
    map.flyTo(
        [position.lat, position.lng], 
        13, 
        {animate: true}
    );
    return position === null 
        ? null 
        : <Marker position={position}></Marker>

    return (
        <React.Fragment>
            
        </React.Fragment>
    );
};

