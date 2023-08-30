import React from 'react';

const UsersByIdDetails = (props) => {
    console.log("props data", props);

    return (
        <div>
            <h1>User Details {props.user.id}</h1>
        </div>
    );
};

export const getStaticPaths = async () => {
    const data = await(await fetch(`https://jsonplaceholder.typicode.com/users`)).json();
    const allUserIds = data.users.map((user) => user.id);
    console.log("allUserIds", allUserIds);
    return {
        paths: allUserIds.map((userId) => ({
            params: { id:`${userId}` },
            fallback: false,
        }))
    }
}

export const getStaticProps = async (context) => {
    const { id } = context.params;
    const data = await(await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)).json();
    return {
        props: { user: data },
    }
    
}

export default UsersByIdDetails;