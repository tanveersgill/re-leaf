import { useState } from 'react'
import axios from 'axios'
import {Fragment} from 'react'
import styled from 'styled-components'

import {useAuth0, isAuthenticated} from '@auth0/auth0-react'
import useAuthenticatedRequest from '../hooks/network/useAuthenticatedRequest'

export default Profile = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated)
    return (
        <React.Fragment>
            {isLoggedIn && 
                useAuthenticatedRequest('/profile', 'GET', )
            }
        </React.Fragment>
    )
} 