import React from "react";
import styled from "styled-components";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const Sidebar = styled.div`
  width: 30%;
  background-color: #4caf50;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Map = styled.div`
  width: 70%;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100vh;
  border: none;
`;

const SidebarButton = styled.button`
  background-color: #66bb6a;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 2px;
  cursor: pointer;
  transition-duration: 0.4s;
  border-radius: 4px;

  &:hover {
    background-color: #43a047;
  }
`;

const GoogleMaps = (props) => {
  return (
    <Container>
      <Sidebar>
        <h2>Some Heading</h2>
        <p>Some text or content here...</p>
        <div className="buttons">
          <SidebarButton>Button 1</SidebarButton>
          <SidebarButton>Button 2</SidebarButton>
        </div>
      </Sidebar>
      <Map>
        <StyledIframe
          allowFullScreen
          title="Google Maps"
          src={`https://www.google.com/maps/embed/v1/directions?key=${GOOGLE_MAPS_API_KEY}
          &origin=${props.origin || "Toronto"}
          &destination=${props.destination || "SanFrancisco+California"}
          &mode=${props.mode || "flying"}`}
        />
      </Map>
    </Container>
  );
};

export default GoogleMaps;
