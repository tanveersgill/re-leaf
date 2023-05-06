const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;

const GoogleMaps = () => {
  return (
    <iframe
      title="Google Maps"
      src={`https://www.google.com/maps/embed/v1/directions?key=${GOOGLE_MAPS_API_KEY}
    &origin=Toronto
  &destination=SanFrancisco+California
  &mode=flying`}
    />
  );
};

export default GoogleMaps;
