"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function Services() {
    const [users, setUsers] = useState([]);
    console.log("users", users);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const usersData = await response.json();
                setUsers(usersData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchUsers();
    }, []);

    return (
        <div className="container">
            <h1>Users</h1>
            <ul className="list-unstyled">
                {users.map(user => (
                    <li key={user.id}>
                        <Link href={`/services/${user.id}`}><div className="py-1">{user.name}</div></Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Services;
