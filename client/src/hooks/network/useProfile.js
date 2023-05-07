import { useState, useEffect } from "react"
import {useAuth0} from '@auth0/auth0-react'
import useAuthenticatedRequest from './useAuthenticatedRequest'
import axios from 'axios'

//will return profile if it exists in mongo, or create it and then return it
export default function useProfile () {
    const { makeAuthenticatedRequest } = useAuthenticatedRequest();
    const { isAuthenticated, user } = useAuth0();
    // const [ isLoggedIn, setIsLoggedIn ] = useState(isAuthenticated)
    const [isLoading, setIsLoading] = useState(true)
    const [profile, setProfile] = useState({username:'loading'})

    useEffect(()=>{
        (async () => {
            if (!isAuthenticated) return
            const p = await makeAuthenticatedRequest(`/api/profile`, 'GET')
            if (p) {
                setProfile(p)
                console.log(p)
                return
            }
            console.log(user)
            const registeredProfile = await makeAuthenticatedRequest(`/api/auth/register`, 'POST')
            setProfile(registeredProfile)
            setIsLoading(false)
        })()
    }, [user, isAuthenticated])

    return [isLoading, profile];
    // return [handleProfileChange, profile];
}