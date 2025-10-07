import React, { useEffect, useState } from 'react'
import { getProfile } from '../services/auth.service';

type Props = {}

const Profile = (props: Props) => {
    const [profile, setProfile] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await getProfile();
                setProfile(res.data);
            } catch (error: any) {
                console.error("Failed to get profile:", error);
                setError(
                    error.respones?.data?.message || "Failed to get profile"
                )
            } finally {
                setLoading(false);
            }
        }

        fetchProfile();
    }, [])
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