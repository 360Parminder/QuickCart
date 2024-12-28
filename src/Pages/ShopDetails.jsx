import React, { useState } from 'react';

const ShopDetails = () => {
    const [shop, setShop] = useState({
        address: {
            street: "123 Main Street",
            city: "Sample City",
            state: "Sample State",
            zip: "123456",
            country: "Sample Country"
        },
        _id: "676822a68b13d67deb922327",
        shopName: "Example Shop",
        email: "example@example.com",
        owner: "676822a68b13d67deb922323",
        accounts: [],
        products: [],
        status: "active",
        employees: [],
        shopId: "8267549",
        __v: 0
    });
    const [employees, setEmployees] = useState([
        {
            "_id": "676822a68b13d67deb922323",
            "mobile": 1234567890,
            "password": "$2a$12$nfvtQK9i0sC9SyEDariB5eCDBvLz7YhwGGNqJxtWh.7Yt7qG4z0Vq",
            "role": "Owner",
            "authKey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NjgyMmE2OGIxM2Q2N2RlYjkyMjMyMyIsInNob3BJZCI6IjgyNjc1NDkiLCJpYXQiOjE3MzUyODc2MTIsImV4cCI6MTczNTg5MjQxMn0.4kUws3cq6Cz9usb3QknV2QhSux9NW9LEo-Gu-0sIqsI",
            "shopId": "8267549",
            "createdAt": "2024-12-22T14:31:02.133Z",
            "updatedAt": "2024-12-27T08:20:12.939Z",
            "__v": 0,
            "image": "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "firstname": "parminder",
            "lastname": "Singh"
        },
        {
            "_id": "676d189c7bb27ba5743def24",
            "employeeId": "5703081457",
            "image": "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "name": "John Doe",
            "mobile": 987654326,
            "password": "$2a$10$XQCRSHwy3KKviQWX63b/M.CpDnoN5otAjRl/eX1lt4DEMXoHXrknO",
            "role": "CounterEmployee",
            "authKey": "",
            "shopId": "8267549",
            "createdAt": "2024-12-26T08:49:32.453Z",
            "updatedAt": "2024-12-26T08:49:32.453Z",
            "__v": 0
        },
        {
            "_id": "676d207b6c6e09112d85bdeb",
            "employeeId": "5755762534",
            "image": "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "firstName": "parminder",
            "lastName": "singh",
            "mobile": 987654346,
            "password": "$2a$10$n1nC4lI1WISbd/KyWkcVzO0drlXOTibuVn.tHNAd4Ys7MHz8blyOK",
            "role": "CounterEmployee",
            "authKey": "",
            "shopId": "8267549",
            "createdAt": "2024-12-26T09:23:07.294Z",
            "updatedAt": "2024-12-26T09:23:07.294Z",
            "__v": 0
        },
        {
            "_id": "676d209f8fb2d01d99bf0faa",
            "employeeId": "5514528525",
            "image": "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "firstName": "parminder",
            "lastName": "singh",
            "mobile": 987634346,
            "password": "$2a$10$hiSGQzktZqdtnT9E0vkDou3YbPRaVL/P2dbzDh03l8F0fuhgypKKi",
            "role": "CounterEmployee",
            "authKey": "",
            "shopId": "8267549",
            "createdAt": "2024-12-26T09:23:43.344Z",
            "updatedAt": "2024-12-26T09:23:43.344Z",
            "__v": 0
        }
    ]);
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShop((prevShop) => ({
            ...prevShop,
            [name]: value,
        }));
    };

    const handleSave = () => {
        setIsEditing(false);
        // Add save logic here
        console.log('Shop details saved:', shop);
    };

    return (
        <div className="flex h-full w-full flex-col overflow-y-scroll text-white">
            <div className="w-full flex justify-start my-3 ms-10">
                <img
                    src="shop-image-url" // Replace with actual shop image URL
                    alt="Shop Avatar"
                    className="w-24 h-24 rounded-full items-start justify-start"
                />
            </div>
            <div className="bg-[#2c076e] border border-[#5a12c5] p-8 rounded-lg shadow-lg mb-10">
                <p className="text-lg font-semibold w-full my-5">Shop Details</p>
                <div className="w-full grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label className=""><strong>Shop Name:</strong></label>
                        <input
                            type="text"
                            name="shopName"
                            value={shop.shopName}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="mb-4">
                        <label className=""><strong>Email:</strong></label>
                        <input
                            type="text"
                            name="email"
                            value={shop.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="mb-4">
                        <label className=""><strong>Status:</strong></label>
                        <input
                            type="text"
                            name="status"
                            value={shop.status}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            disabled={!isEditing}
                        />
                    </div>
                    <div>
                        <label><strong>Shop ID:</strong></label>
                        <input
                            type="text"
                            name="shopId"
                            value={shop.shopId}
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
            <div className="bg-[#2c076e] border border-[#5a12c5] p-8 rounded-lg shadow-lg mb-10">
                <p className="text-lg font-semibold w-full my-5">Address</p>
                <div className="w-full grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label className=""><strong>Street:</strong></label>
                        <input
                            type="text"
                            name="street"
                            value={shop.address.street}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="mb-4">
                        <label className=""><strong>City:</strong></label>
                        <input
                            type="text"
                            name="city"
                            value={shop.address.city}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="mb-4">
                        <label className=""><strong>State:</strong></label>
                        <input
                            type="text"
                            name="state"
                            value={shop.address.state}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="mb-4">
                        <label className=""><strong>ZIP:</strong></label>
                        <input
                            type="text"
                            name="zip"
                            value={shop.address.zip}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="mb-4">
                        <label className=""><strong>Country:</strong></label>
                        <input
                            type="text"
                            name="country"
                            value={shop.address.country}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            disabled={!isEditing}
                        />
                    </div>
                </div>
            </div>
            <div className="bg-[#2c076e] border border-[#5a12c5] p-8 rounded-lg shadow-lg">
                <p className="text-lg font-semibold w-full my-5">Employees</p>
                <div className="w-full grid grid-cols-1 gap-4">
                    {employees.map((employee) => (
                        <div key={employee._id} className="mb-4 flex flex-row items-center space-x-4">
                            <img
                                src={employee.image}
                                alt={`${employee.firstname} ${employee.lastname}`}
                                className="w-16 h-16 rounded-full mb-2"
                            />
                            <p className='flex flex-col capitalize'><strong>Employee ID:</strong> {employee?.employeeId}</p>
                            <p className='flex flex-col capitalize'><strong>Name:</strong> {employee.firstname} {employee.lastname}</p>
                            <p className='flex flex-col capitalize'><strong>Role:</strong> {employee.role}</p>
                            <p className='flex flex-col capitalize'><strong>Mobile:</strong> {employee.mobile}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopDetails;