const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;

console.log(GOOGLE_MAPS_API_KEY);

const GoogleMaps = (props) => {
  return (
    <div className="pageOne">
      <div className="map">
        <iframe
          width="1200"
          height="825"
          allowfullscreen
          title="Google Maps"
          src={`https://www.google.com/maps/embed/v1/directions?key=${GOOGLE_MAPS_API_KEY}
          &origin=${props.origin || 'Toronto'}
          &destination=${props.destination || 'SanFrancisco+California'}
          &mode=${props.mode || 'flying'}`}
        />
      </div>
    </div>
  );
};

export default GoogleMaps;
