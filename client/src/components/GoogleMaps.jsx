const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;

console.log(GOOGLE_MAPS_API_KEY);

const GoogleMaps = () => {
  return (
    <div className="pageOne">
      <div className="map">
        <iframe
          allowfullscreen
          title="Google Maps"
          src={`https://www.google.com/maps/embed/v1/directions?key=${GOOGLE_MAPS_API_KEY}
          &origin=Toronto
          &destination=SanFrancisco+California
          &mode=flying`}
        />
      </div>
    </div>
  );
};

export default GoogleMaps;
