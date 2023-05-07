import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
<<<<<<< HEAD
import { NavLink } from "react-router-dom";
=======
import profilePhoto from "../assets/user.jpg";
>>>>>>> 530bc4085a6308408f9b2f4f2867b6046104198f

export default function Navbar() {
  const { isAuthenticated } = useAuth0();
  const [navbarState, setNavbarState] = useState(false);

  return (
    <>
      <Nav>
        <div className="brand">
          <div className="container">
            <img src={logo} alt="" />
            Re-Leaf
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavbarState(true)} />
            )}
          </div>
        </div>

        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">About</a>
          </li>
          <li>
            <a href="#recommend">Places</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
<<<<<<< HEAD
        {isAuthenticated ? 
          <div class="flex justify-center items-center md:space-x-4">
            <NavLink to='/profile'>Profile</NavLink>
            <LogoutButton />
          </div> : 
          <LoginButton/>
        }
=======
        <ProfileContainer>
          {isAuthenticated ? (
            <>
              <Profile>
                <img src={profilePhoto} alt="Profile" />
                <span>100 Points</span>
              </Profile>
              <LogoutButton />
            </>
          ) : (
            <LoginButton />
          )}
        </ProfileContainer>
>>>>>>> 530bc4085a6308408f9b2f4f2867b6046104198f
      </Nav>
      <ResponsiveNav state={navbarState}>
        <ul>
          <li>
            <a href="#home" onClick={() => setNavbarState(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setNavbarState(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#recommend" onClick={() => setNavbarState(false)}>
              Places
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={() => setNavbarState(false)}>
              Testimonials
            </a>
          </li>
        </ul>
      </ResponsiveNav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand {
    .container {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.2rem;
      font-weight: 900;
      text-transform: uppercase;
    }
    .toggle {
      display: none;
    }
  }
  ul {
    display: flex;
    gap: 1rem;
    list-style-type: none;
    align-items: center; // Add this line to center the navigation links vertically
    li {
      a {
        text-decoration: none;
        color: #2ca744;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #1c7a30;
        }
      }
      &:first-of-type {
        a {
          color: #1c7a30;
          font-weight: 900;
        }
      }
    }
  }

  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    color: white;
    background-color: #48a65c;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #1c7a30;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        display: block;
      }
    }
    ul {
      display: none;
    }
    button {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  top: ${({ state }) => (state ? "50px" : "-400px")};
  background-color: white;
  height: 30vh;
  width: 100%;
  align-items: center;
  transition: 0.3s ease-in-out;
  ul {
    list-style-type: none;
    width: 100%;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;

      a {
        text-decoration: none;
        color: #2ca744;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #1c7a30;
        }
      }
      &:first-of-type {
        a {
          color: #1c7a30;
          font-weight: 900;
        }
      }
    }
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  span {
    font-size: 1.1rem;
    font-weight: bold;
    color: #2ca744;
  }
`;
