import React from "react";
import styled from "styled-components";
import { AiFillCar } from "react-icons/ai";
import { IoIosAirplane, IoIosPricetag } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import useAccommodations from "../hooks/network/useAccommodations";
import { useTripBuilder } from "../context/TripBuilderContext";

const Accommodation = () => {
  const [ accommodations ] = useAccommodations();
  const navigate = useNavigate();

  const { trip, setTrip } = useTripBuilder();

  const handleSetTrip = (accommodation) => {
    setTrip({
      ...trip,
      accommodation: {
        name: accommodation.name,
        address: accommodation.address,
        description: accommodation.description,
        image: accommodation.image,
      },
    });
  };

  return (
    <div className="flex justify-center">
      <div className="flex items-center w-full py-12 overflow-y-hidden">
        <div className="flex flex-col items-center w-2/3 bg-green-100 px-8 py-8 rounded-lg shadow-xl max-h-[90vh] overflow-y-auto scrollbar-hide">
          <h1 className="font-semibold text-2xl mb-4">Best Options</h1>
          {accommodations
            .filter((a) => a.image)
            .map((accommodation, i) => (
              <div
                key={i}
                className={`mb-20 border-2 p-4 rounded-lg ${
                  accommodation?.name === trip.accommodation?.name
                    ? "border-green-500 shadow-xl"
                    : "border-transparent"
                }`}
                onClick={() => handleSetTrip(accommodation)}
              >
                <h2 className="text-xl">
                  {accommodation.name}
                  <span className="ml-3 font-bold">
                    {accommodation.price_level}
                  </span>
                </h2>
                <p className="text-gray-600">
                  {accommodation.address.address_string}
                </p>
                {accommodation.image && (
                  <img
                    src={accommodation.image}
                    alt={accommodation.name}
                    className="mt-2 rounded-lg shadow-lg"
                  />
                )}
              </div>
            ))}
        </div>
      </div>
      <div className="w-1/3 bg-slate-100 max-h-[90vh]">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button>Next im getting lazy</button>
      </div>
    </div>
  );
};

export default Accommodation;
