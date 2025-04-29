import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Profile = () => {

    const {user} = use(AuthContext);

    return (
        <div>
            <p>{user.email}</p>
        </div>
    );
};

export default Profile;