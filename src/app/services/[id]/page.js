"use client"
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

function ServicesByIdDetails({ params }) {
    const [user, setUser] = useState();
    const id = params.id;
    console.log("id", id);

    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                const userData = await response.json();
                setUser(userData);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        }

        fetchUser(id);

    }, [id]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container py-5">
            <h1>User Details {user.id}</h1>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
        </div>
    );
}

export default ServicesByIdDetails;
