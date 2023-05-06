import { useState, useEffect } from 'react'
import axios from 'axios'
import {Fragment} from 'react'
import styled from 'styled-components'

import {useAuth0} from '@auth0/auth0-react'
import useAuthenticatedRequest from '../hooks/network/useAuthenticatedRequest'

export default function Profile () {
    const { getAccessTokenSilently } = useAuth0();
    const {makeAuthenticatedRequest} = useAuthenticatedRequest()
    const [isLoggedIn, setIsLoggedIn] = useState(useAuth0())
    const [isLoading, setIsLoading] = useState(false)
    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        let getUser = async () => {
            setIsLoading(true)
            const info = await makeAuthenticatedRequest('/profile', 'GET')
            setUserInfo(info)
            setIsLoading(false)
        }
        getUser();
    }, [])
    
    /*
    const displayUserInfo = (info) => {
        return (
            
        )
    }
    */

    return (
        <Fragment>
            {isLoggedIn ? 
                userInfo.yes
                :
                <p>not logged in</p>
            }
        </Fragment>
    )
} 