import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get('https://api.github.com/users/github-john-doe');
                setProfile(response.data);
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        };

        fetchProfile();
    }, []);

    const renderProfileInfo = () => {
        if (!profile) {
            return <p>Loading...</p>;
        }

        return (
            <div>
                <h1>{profile.name}</h1>
                <p>Username: {profile.login}</p>
                <p>Location: {profile.location}</p>
                <p>Bio: {profile.bio}</p>
                <p>Followers: {profile.followers}</p>
                <p>Following: {profile.following}</p>
                <p>Public Repos: {profile.public_repos}</p>
            </div>
        );
    };

    return (
        <div>
            {renderProfileInfo()}
        </div>
    );
};

export default Profile;