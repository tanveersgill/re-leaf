import React, { useCallback, useMemo } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "70%",
};

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;

const Map = ({ coordinates }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  const markers = useMemo(() => {
    return coordinates?.map((coordinate) => ({
      lat: coordinate.lat,
      lng: coordinate.lng,
    }));
  }, [coordinates]);

  const onLoad = useCallback(
    (map) => {
      const bounds = new window.google.maps.LatLngBounds();

      markers.forEach((marker) => {
        bounds.extend(marker);
      });

      map.fitBounds(bounds);
    },
    [markers]
  );

  return (
    isLoaded && (
      <GoogleMap mapContainerStyle={containerStyle} onLoad={onLoad} zoom={5}>
        {markers.length &&
          markers.map((marker, i) => {
            return (
              <div key={i}>
                <Marker position={marker} />
              </div>
            );
          })}
      </GoogleMap>
    )
  );
};

export default Map;
