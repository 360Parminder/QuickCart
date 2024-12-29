import React, { useContext, useEffect, useState } from 'react';
import { UserData } from '../Context/UserData';
import { User } from '../Services/User';
import { getTimeZone } from '../Utils/timeDate';

const Profile = () => {
    const { userdata } = useContext(UserData);
    const [user, setUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (userdata) {
            setUser({ ...userdata });
        }
    }, [userdata]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSave = async () => {
        setIsEditing(false);
        try {
            const response = await User.updateProfile(user);
            console.log('Profile updated successfully:', response);
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    if (!user) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    return (
        <div className="flex h-full w-full flex-col overflow-y-scroll text-white">
            <div className="w-full flex justify-start my-3 ms-10">
                <img
                    src={user.image}
                    alt="User Avatar"
                    className="w-24 h-24 rounded-full items-start justify-start"
                />
            </div>
            <div className="bg-[#2c076e] border border-[#5a12c5] p-8 rounded-lg shadow-lg mb-10">
                <p className="text-lg font-semibold w-full my-5">Contact Details</p>
                <div className="w-full grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label className=""><strong>First Name:</strong></label>
                        <input
                            type="text"
                            name="firstName"
                            value={user.firstName || ''}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="mb-4">
                        <label className=""><strong>Last Name:</strong></label>
                        <input
                            type="text"
                            name="lastName"
                            value={user.lastName || ''}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="mb-4">
                        <label className=""><strong>Mobile:</strong></label>
                        <input
                            type="text"
                            name="mobile"
                            value={user.mobile || ''}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            disabled={!isEditing}
                        />
                    </div>
                    <div>
                        <label><strong>TimeZone:</strong></label>
                        <input
                            type="text"
                            name="timezone"
                            value={getTimeZone() || ''}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            disabled={!isEditing}
                        />
                    </div>
                </div>
                <div>
                    {isEditing ? (
                        <button onClick={handleSave} className="bg-[#6b16eb] text-white px-6 py-2 rounded">Save</button>
                    ) : (
                        <button onClick={() => setIsEditing(true)} className="bg-[#6b16eb] text-white px-10 py-2 rounded">Edit</button>
                    )}
                </div>
            </div>
            <div className="bg-[#2c076e] border border-[#5a12c5] p-8 rounded-lg shadow-lg">
                <p className="text-lg font-semibold w-full my-5">Account Overview</p>
                <div className="w-full grid grid-cols-2 gap-4">
                    <div>
                        <label className=""><strong>ID:</strong></label>
                        <input
                            type="text"
                            name="_id"
                            value={user.employeeId || ''}
                            className="w-full p-2 border rounded"
                            disabled
                        />
                    </div>
                    <div className="mb-4">
                        <label className=""><strong>Role:</strong></label>
                        <input
                            type="text"
                            name="role"
                            value={user.role || ''}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="mb-4">
                        <label className=""><strong>Shop ID:</strong></label>
                        <input
                            type="text"
                            name="shopId"
                            value={user.shopId || ''}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="mb-4">
                        <label className=""><strong>Joined On:</strong></label>
                        <input
                            type="text"
                            name="createdAt"
                            value={new Date(user.createdAt).toLocaleString()}
                            className="w-full p-2 border rounded"
                            disabled
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
