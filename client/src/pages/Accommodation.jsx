import React, { useMemo } from "react";
import styled from "styled-components";
import { AiFillCar } from "react-icons/ai";
import { IoIosAirplane } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import useAccommodations from "../hooks/network/useAccommodations";
import Map from "../components/Map";

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

const Accommodation = () => {
  const navigate = useNavigate();
  const [accommodations] = useAccommodations();

  const coordinates = useMemo(
    () =>
      accommodations?.map((a) => ({
        lat: a.location.lat,
        lng: a.location.lng,
      })),
    [accommodations]
  );

  return (
    <Container>
      <Sidebar>
        <HotelInfo
          title="Best Option"
          name={accommodations?.[0]?.name}
          rating={accommodations?.[0]?.rating}
        />
        <HotelInfo
          title="Worst Option"
          name={accommodations?.[accommodations.length - 1]?.name}
          rating={accommodations?.[accommodations.length - 1]?.rating}
        />
        <SavingsSection>
          <p>
            By choosing the best option, you save <strong>$50</strong> and
            reduce carbon emissions by <strong>5 kg</strong>!
          </p>
          <p>
            <em>
              Help the Earth by choosing eco-friendly options and earn 5 points!
            </em>
          </p>
        </SavingsSection>
        <ButtonContainer>
          <SidebarButton onClick={() => navigate("/plan/flight")}>
            Back
          </SidebarButton>
          <SidebarButton onClick={() => navigate("/plan/activities")}>
            Next
          </SidebarButton>
        </ButtonContainer>
      </Sidebar>
      {coordinates?.length > 0 && <Map coordinates={coordinates} />}
    </Container>
  );
};

const HotelInfo = ({ title, name, rating }) => {
  return (
    <SidebarSection>
      <SectionTitle>{title}</SectionTitle>
      <InfoRow>
        <Icon>
          <IoIosAirplane />
        </Icon>
        <InfoContainer>Hotel: {name}</InfoContainer>
      </InfoRow>
      <InfoRow>
        <Icon>
          <AiFillCar />
        </Icon>
        <InfoContainer>Rating: {rating}</InfoContainer>
      </InfoRow>
    </SidebarSection>
  );
};

export default Accommodation;
