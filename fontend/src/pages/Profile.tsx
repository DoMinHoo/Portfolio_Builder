import React, { useState } from 'react'

type Props = {}

const Profile = (props: Props) => {
    const [profile, setProfile] = useState<any>(null);
    return (
        <div className="p-10">
            <h1 className="text-xl font-bold">Profile</h1>
            {profile && (
                <pre className="bg-gray-100 p-4 mt-4 rounded">
                    {JSON.stringify(profile, null, 2)}
                </pre>
            )}
        </div>

    )
}

export default Profile