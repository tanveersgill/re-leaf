// import React from "react";
// import styled from "styled-components";
// import { AiFillCar } from "react-icons/ai";
// import { IoIosAirplane, IoIosPricetag } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
// import useAccommodations from "../hooks/network/useAccommodations";
// import { useTripBuilder } from "../context/TripBuilderContext";

// const Accommodation = () => {
//   const [accommodations] = useAccommodations();
//   const navigate = useNavigate();

//   const { trip, setTrip } = useTripBuilder();

//   const handleSetTrip = (accommodation) => {
//     setTrip({
//       ...trip,
//       accommodation: {
//         name: accommodation.name,
//         address: accommodation.address,
//         description: accommodation.description,
//         image: accommodation.image,
//       },
//     });
//   };

//   return (
//     <div className="flex justify-center w-full">
//       <div className="items-center w-2/3 overflow-y-hidden">
//         <div className="flex flex-col items-center w-2/10 bg-green-100 px-8 py-8 shadow-xl max-h-[90vh] overflow-y-auto scrollbar-hide">
//           <h1 className="font-semibold text-2xl mb-4">Best Options</h1>
//           {accommodations
//             .filter((a) => a.image)
//             .map((accommodation, i) => (
//               <div
//                 key={i}
//                 className={`mb-20 border-2 p-4 rounded-lg ${
//                   accommodation?.name === trip.accommodation?.name
//                     ? "border-green-500 shadow-xl"
//                     : "border-transparent"
//                 }`}
//                 onClick={() => handleSetTrip(accommodation)}
//               >
//                 <h2 className="text-xl">
//                   {accommodation.name}
//                   <span className="ml-3 font-bold">
//                     {accommodation.price_level}
//                   </span>
//                 </h2>
//                 <p className="text-gray-600">
//                   {accommodation.address.address_string}
//                 </p>
//                 {accommodation.image && (
//                   <img
//                     src={accommodation.image}
//                     alt={accommodation.name}
//                     className="mt-2 rounded-lg shadow-lg"
//                   />
//                 )}
//               </div>
//             ))}
//           <div className="buttonContainer">
//             <button className="button" onClick={() => navigate("/")}>
//               Back
//             </button>
//             <button
//               className="button"
//               onClick={() => navigate("/plan/accommodation")}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="w-1/3 bg-slate-100 max-h-[90vh]">
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Accommodation;

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

const Accomodation = () => {
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
              Hotel:{" "}
              <a
                href="https://www.marriott.com/hotels/travel/sfodt-san-francisco-marriott-marquis/"
                target="_blank"
              >
                {" "}
                Marriott Marquis
              </a>
            </InfoContainer>
          </InfoRow>
          <InfoRow>
            <Icon>
              <AiFillCar />
            </Icon>
            <InfoContainer>Rating: 4.5 stars</InfoContainer>
          </InfoRow>
          <InfoRow>
            <Icon>
              <IoIosPricetag />
            </Icon>
            <InfoContainer>Price: $200 per night</InfoContainer>
          </InfoRow>
        </SidebarSection>
        <SidebarSection>
          <SectionTitle>Worst Option</SectionTitle>
          <InfoRow>
            <Icon>
              <IoIosAirplane />
            </Icon>
            <InfoContainer>
              Hotel:{" "}
              <a
                href="https://www.hilton.com/en/hotels/sfofghh-hilton-san-francisco-union-square/"
                target="_blank"
              >
                {" "}
                Hilton Union Square
              </a>
            </InfoContainer>
          </InfoRow>
          <InfoRow>
            <Icon>
              <AiFillCar />
            </Icon>
            <InfoContainer>Rating: 4 stars</InfoContainer>
          </InfoRow>
          <InfoRow>
            <Icon>
              <IoIosPricetag />
            </Icon>
            <InfoContainer>Price: $250 per night</InfoContainer>
          </InfoRow>
        </SidebarSection>
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
      <Map>
        <StyledIframe
          allowFullScreen
          title="Google Maps"
          src={`https://www.google.com/maps/embed/v1/search?key=${GOOGLE_MAPS_API_KEY}
          &q=hotels+in+SanFrancisco+California`}
        />
      </Map>
    </Container>
  );
};

export default Accomodation;
