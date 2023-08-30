import Link from 'next/link';
import React from 'react';


const UsersPage = (props) => {
    console.log("props", props);

    return (
        <div>
            <h1>Users</h1>
            {/* {
                props.data.map((user) => (
                    <div key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </div>
                ))
            } */}
        </div>
    );
};

export const getStaticProps = async () => {
    try {
        // const data = await (await fetch(`https://jsonplaceholder.typicode.com/users`)).json();
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await res.json();
        console.log("users page data", data);
        return {
            props: { data }, // Change "user" to "data"
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: {
                data: [],
            },
        };
    }
};



export default UsersPage;
