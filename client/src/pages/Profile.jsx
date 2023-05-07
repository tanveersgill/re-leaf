import {Fragment} from 'react'

import {useAuth0} from '@auth0/auth0-react'
import useProfile from '../hooks/network/useProfile'
import ProfileView from '../components/ProfileView'

export default function Profile () {
    const { isAuthenticated } = useAuth0();
    const {profile} = useProfile()
    
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
