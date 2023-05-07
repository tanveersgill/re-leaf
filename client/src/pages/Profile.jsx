import { useState, useEffect } from 'react'
import axios from 'axios'
import {Fragment} from 'react'
import styled from 'styled-components'

import {useAuth0} from '@auth0/auth0-react'
import useAuthenticatedRequest from '../hooks/network/useAuthenticatedRequest'
import useProfile from '../hooks/network/useProfile'
import ProfileView from '../components/ProfileView'

export default function Profile () {
    const { getAccessTokenSilently, isAuthenticated } = useAuth0();
    // const { makeAuthenticatedRequest } = useAuthenticatedRequest()
    // const [isLoggedIn, setIsLoggedIn] = useState(useAuth0())
    
    const [isLoading, profile] = useProfile()
    
    console.log(profile)

    // const getUser = async () => {
    //     setIsLoading(true)
    //     const info = await makeAuthenticatedRequest(`/api/profile`, 'GET')
    //     setUserInfo(info)
    //     setIsLoading(false)
    // }
    
    // useEffect(() => {
    //     getUser();
    // }, [])
     
    return (
        <Fragment>
            {isAuthenticated ? 
                <>
                    <ProfileView name={profile?.username} email={profile?.email}/>
                </>
                :
                <p>loading...</p>
            }
        </Fragment>
    )
}

const Section = styled.section`
    border: 1px black solid;
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
      color: #04B431;
      h1 {
        font-size: 2rem;
        letter-spacing: 0.05rem;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
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
    }
  }
`;