import React from "react";
import styled from "styled-components";
import { AiFillCar } from "react-icons/ai";
import { IoIosAirplane, IoIosPricetag } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const Sidebar = styled.div`
  width: 30%;
  background-color: #e0f2f1;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SidebarSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 1.5rem;
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
  background-color: #4caf50;
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
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: #43a047;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 600;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  margin: 5px 0;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

const Icon = styled.span`
  margin-right: 10px;
  font-size: 24px;
  color: #4caf50;
`;

const SavingsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  background-color: #4caf5021;
  color: black;
  font-size: 18px;
  margin-top: 20px;
  border-radius: 8px;
  font-weight: 600;
`;

const Flight = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Sidebar>
        <SidebarSection>
          <SectionTitle>Best Option</SectionTitle>
          <InfoRow>
            <Icon>
              <IoIosAirplane />
            </Icon>
            <InfoContainer>
              Carrier:{" "}
              <a href="https://www.united.com/en/ca" target="_blank">
                {" "}
                United Airlines
              </a>
            </InfoContainer>
          </InfoRow>
          <InfoRow>
            <Icon>
              <AiFillCar />
            </Icon>
            <InfoContainer>Carbon Emission: 275 kg</InfoContainer>
          </InfoRow>
          <InfoRow>
            <Icon>
              <IoIosPricetag />
            </Icon>
            <InfoContainer>Price: $565</InfoContainer>
          </InfoRow>
        </SidebarSection>
        <SidebarSection>
          <SectionTitle>Worst Option</SectionTitle>
          <InfoRow>
            <Icon>
              <IoIosAirplane />
            </Icon>
            Carrier:{" "}
            <a
              href="https://www.aircanada.com/ca/en/aco/home.html"
              target="_blank"
            >
              {" "}
              Air Canada
            </a>
          </InfoRow>
          <InfoRow>
            <Icon>
              <AiFillCar />
            </Icon>
            Carbon Emission: 366 kg
          </InfoRow>
          <InfoRow>
            <Icon>
              <IoIosPricetag />
            </Icon>
            Price: $797
          </InfoRow>
        </SidebarSection>
        <SavingsSection>
          <p>
            By choosing the best option, you save <strong>$232</strong> and
            reduce carbon emissions by <strong>91 kg</strong>!
          </p>
          <p>
            <em>
              Help the Earth by choosing eco-friendly options and earn 91
              points!
            </em>
          </p>
        </SavingsSection>
        <ButtonContainer>
          <SidebarButton onClick={() => navigate("/")}>Back</SidebarButton>
          <SidebarButton onClick={() => navigate("/plan/accomodation")}>
            Next
          </SidebarButton>
        </ButtonContainer>
      </Sidebar>
      <Map>
        <StyledIframe
          allowFullScreen
          title="Google Maps"
          src={`https://www.google.com/maps/embed/v1/directions?key=${GOOGLE_MAPS_API_KEY}
          &origin=Toronto
          &destination=SanFrancisco+California
          &mode=flying`}
        />
      </Map>
    </Container>
  );
};

export default Flight;
