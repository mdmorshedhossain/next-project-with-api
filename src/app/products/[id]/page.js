"use client"
import React from 'react';
import itemsData from '../../../../public/productsJSON.json'; // Import your local data here
import { useParams } from "next/navigation";
// import productsDataArr from '../../../public/productsJSON.json';
function ProductDetails(props) {
    // const id = props.params.id
    const params = useParams();
    console.log("id", params);
    const item = itemsData.find(item => item.id === parseInt(params.id));
    console.log("item id", item);

    return (
        <div className="container py-5">
            <h1>ProductDetails {item?.id}</h1>
            <h1>{item?.title}</h1>
            {
                item?.content.map((contentItem) => {
                    return (
                        <>
                            <h1>{contentItem.title}</h1>
                            <p>{contentItem.desc}</p>
                        </>
                    )
                })
            }
        </div>
    );
}

export async function getServerSideProps({ params }) {
    // Fetch data based on the slug parameter
    const { id } = params;
    // const item = itemsData.find(item => item.id === id);
    const item = itemsData.find(item => item.id === parseInt(id));
    console.log("item", item);
    
    if (!item) {
        return {
            notFound: true,
        };
    }
    
    return {
        props: {
            item,
        },
    };
}

export default ProductDetails;


// import React from 'react';
// import itemsData from '../../../../public/productsJSON.json'; // Import your local data here
// import { useParams } from 'next/navigation';
// // import productsDataArr from '../../../public/productsJSON.json';
// function ProductDetails(props) {
//     const id = props.params.id
//     console.log("id", id);
//     const item = itemsData.find(item => item.id === parseInt(id));
//     console.log("item id", item);

//     return (
//         <div className="container py-5">
//             <h1>ProductDetails {id}</h1>
//             <h1>{item?.title}</h1>
//             {
//                 item?.content.map((contentItem) => {
//                     return (
//                         <>
//                             <h1>{contentItem.title}</h1>
//                             <p>{contentItem.desc}</p>
//                         </>
//                     )
//                 })
//             }
//         </div>
//     );
// }

// export async function getServerSideProps({ params }) {
//     // Fetch data based on the slug parameter
//     const { id } = params;
//     // const item = itemsData.find(item => item.id === id);
//     const item = itemsData.find(item => item.id === parseInt(id));
//     console.log("item", item);

//     return {
//         props: {
//             item,
//         },
//     };
// }

// export default ProductDetails;