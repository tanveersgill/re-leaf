import React, { useState, useMemo } from "react";
import styled from "styled-components";
import homeImage from "../assets/hero.png";
import { useNavigate } from "react-router-dom";
import { useTripBuilder } from "../context/TripBuilderContext";
import { useAuth0 } from "@auth0/auth0-react";
import LoginModal from "./LoginModal";

export default function Hero() {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const { isAuthenticated } = useAuth0();

  const handleClick = () => {
    if (isAuthenticated) {
      navigate("/plan/flight");
    } else {
      setShowModal(true);
    }
  };

  const { trip, setTrip } = useTripBuilder();

  const handleDestinationChange = (e) => {
    const { value } = e.target;
    value.replaceAll(" ", "%20");
    setTrip({ ...trip, destination: e.target.value });
  };

  const handleCheckInChange = (e) => {
    const { value } = e.target;
    value.replaceAll(" ", "%20");
    setTrip({ ...trip, startDate: e.target.value });
  };

  const handleCheckOutChange = (e) => {
    setTrip({ ...trip, endDate: e.target.value });
  };

  const isDisabled = useMemo(() => {
    return (
      trip.destination === "" ||
      trip.startDate === "" ||
      trip.endDate === "" ||
      trip.startDate > trip.endDate
    );
  }, [trip]);

  return (
    <Section id="hero">
      <div className="background">
        <img src={homeImage} alt="" />
      </div>
      <div className="content">
        <div className="title">
          <h1>TRAVEL SUSTAINABLY</h1>
          <p>
            Re-Leaf takes travelling to a new level. Plan trips in a way that is
            both cost-effective and eco-friendly.
          </p>
        </div>
        <div className="search">
          <div className="container">
            <label htmlFor="">Where you want to go</label>
            <input
              type="text"
              value={trip.destination}
              placeholder="Search Your location"
              onChange={handleDestinationChange}
            />
          </div>
          <div className="container">
            <label htmlFor="">Check-in</label>
            <input
              type="date"
              value={trip.startDate}
              onChange={handleCheckInChange}
            />
          </div>
          <div className="container">
            <label htmlFor="">Check-out</label>
            <input
              type="date"
              value={trip.endDate}
              onChange={handleCheckOutChange}
            />
          </div>
          <button onClick={handleClick} disabled={isDisabled}>
            Explore Now
          </button>
          <LoginModal
            showModal={showModal}
            onClose={() => setShowModal(false)}
          />
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;
  .background {
    height: 100%;
    img {
      width: 100%;
      filter: brightness(60%);
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .title {
      color: white;
      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }
    .search {
      display: flex;
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.5rem;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: #004c23;
        }
        input {
          background-color: transparent;
          border: none;
          text-align: center;
          color: black;
          &[type="date"] {
            padding-left: 3rem;
          }
          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
        }
      }
      button {
        padding: 1rem;
        cursor: pointer;
        border-radius: 0.3rem;
        border: none;
        color: white;
        background-color: #2ca744;
        font-size: 1.1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #1c7a30;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 25rem;
    .background {
      background-color: palegreen;
      img {
        height: 100%;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
          padding: 1vw;
        }
      }
      .search {
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem;
        /* padding: 0; */
        .container {
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        button {
          padding: 1rem;
          font-size: 1rem;
        }
        /* display: none; */
      }
    }
  }
`;
