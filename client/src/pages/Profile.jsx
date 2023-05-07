import { useState, useEffect } from 'react'
import axios from 'axios'
import {Fragment} from 'react'
import styled from 'styled-components'

import {useAuth0} from '@auth0/auth0-react'
import useAuthenticatedRequest from '../hooks/network/useAuthenticatedRequest'
import useProfile from '../hooks/network/useProfile'

export default function Profile () {
    const { getAccessTokenSilently, isAuthenticated } = useAuth0();
    // const { makeAuthenticatedRequest } = useAuthenticatedRequest()
    // const [isLoggedIn, setIsLoggedIn] = useState(useAuth0())
    const [isLoading, setIsLoading] = useState(false)
    const [userInfo, setUserInfo] = useState({username:'loading'})
    const profile = useProfile()
    
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
                <p>{userInfo?.username}</p>
                :
                <p>not logged in</p>
            }
        </Fragment>
    )
} 