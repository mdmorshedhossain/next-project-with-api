"use client"
import { useState } from 'react';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation'
import homeData from "../components/homeData";


const Home = () => {
  const [cardArr, setcardArr] = useState(homeData);
  console.log("object cardArr", cardArr);
  const router = useRouter();

  if (router.isFallback) {
    <h1>Data is loading</h1>;
  }

  return (
    <div>
      <div className="container py-5">
        <div className="row g-3">
          {
            cardArr.map((item) => (
              <p>{item.title}</p>
            ))
          }
        </div>
        <div className="d-flex pt-5">
          <Link href="/services" className="me-3">Go Services</Link>
          <Link href="/products"  className="me-3">Go Product</Link>
          <Link href="/users" className="me-3">Go Users json  data</Link>
        </div>

      </div>
    </div>
  );
};
export default Home;




// "use client"
// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import MockHomeData from "../../public/MockHomeData.json";
// import HomeData from "../components/homeData"; // Import the actual data, not the component

// const Home = ({ data }) => {
//   console.log("object cardArr", MockHomeData);
//   const router = useRouter();

//   if (router.isFallback) {
//     return <h1>Data is loading</h1>; // Return the loading JSX
//   }

//   return (
//     <div>
//       <div className="container py-5">
//         <div className="row g-3">
//           {/* Render your data here */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export async function getStaticProps() {
//   const data = MockHomeData; // Use the imported JSON directly, no need for useEffect

//   console.log("homeData", data);

//   return {
//     props: {
//       data: MockHomeData,
//     },
//   };
// }

// export default Home;



// {
//   cardArr.map((item) => {
//     return (
//       // <Card data={item} />

//       <div className="col-md-4">
//         <div key={item.id}>
//           {/* <Link href={`/${item.id}`}> */}
//           <div type="button" onClick={() => router.push(`/${item.id}`)}>
//             <h2>{item.title}</h2>
//           </div>
//           {/* </Link> */}
//         </div>
//       </div>
//     )
//   })
// }



// export async function getStaticProps() {
//   const data = MockHomeData;

//   console.log("homeData", data);

//   return {

//     props: {
//       data,
//     },
//   };
// }





// export async function getStaticProps() {
//   const homeData = [
//     {
//       id: 1,
//       title: 'Card 1',
//       content: [
//         {
//           id: 1,
//           title: 'Card 1.1',
//           desc: "This is a card details"
//         }
//       ]
//     },
//     {
//       id: 2,
//       title: 'Card 2',
//       content: [
//         {
//           id: 1,
//           title: 'Card 2.1',
//           desc: "This is a card details"
//         }
//       ]
//     },
//     {
//       id: 3,
//       title: 'Card 3',
//       content: [
//         {
//           id: 1,
//           title: 'Card 3.1',
//           desc: "This is a card details"
//         }
//       ]
//     },
//     // ... other cards
//   ];

//   console.log("homeData", homeData);

//   return {

//     props: {
//       homeData,
//     },
//   };
// }
// export default Home;





// "use client"
// import { useState } from 'react';
// import Image from 'next/image'
// import styles from './page.module.css';
// import Loading_img from './../../public/Loading_img.webp'
// import Link from 'next/link';

// export default function Home() {

//   const [cardArr, setcardArr] = useState([
//     {
//       id: 1,
//       title: 'Card 1',
//       content: [
//         {
//           id: 1,
//           title: 'Card 1.1',
//           desc: "This is a card details"
//         }
//       ]
//     },
//     {
//       id: 2,
//       title: 'Card 2',
//       content: [
//         {
//           id: 1,
//           title: 'Card 1.1',
//           desc: "This is a card details"
//         }
//       ]
//     },
//     {
//       id: 3,
//       title: 'Card 3',
//       content: [
//         {
//           id: 1,
//           title: 'Card 1.1',
//           desc: "This is a card details"
//         }
//       ]
//     },
//   ]);


//   return (
//     <div className="container py-5">
//       <div className="row g-3">

//         {
//           cardArr && cardArr.map((card) => {
//             return (
//               <div className="col-md-4">
//                 <div className={styles.card} key={card.id}>
//                   <Link href={`/${card.id}`}>
//                     <h2>{card.title}</h2>
//                   </Link>
//                 </div>
//               </div>
//             )
//           })
//         }
//       </div>
//       <div className="row py-5">
//         <div className="col-12">
//           <Image
//             src={Loading_img}
//             className="img-fluid"
//             alt="Loading Logo"
//             width="100%"
//             height="100%"
//             priority
//           />
//         </div>
//       </div>

//     </div>
//   )
// }




////backup
// import Image from 'next/image'
// import styles from './page.module.css';
// import Loading_img from './../../public/Loading_img.webp'

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <div className={styles.description}>
//         <p>
//           Get started by editing&nbsp;
//           <code className={styles.code}>src/app/page.js</code>
//         </p>
//         <div>
//           <a
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className={styles.vercelLogo}
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className={styles.center}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />

//       </div>
//       <div className="">
//         <Image
//           src={Loading_img}
//           alt="Next.js Logo"
//           width="100%"
//           height="100%"
//           priority
//         />
//       </div>

//       <div className={styles.grid}>
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Docs <span>-&gt;</span>
//           </h2>
//           <p>Find in-depth information about Next.js features and API.</p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Learn <span>-&gt;</span>
//           </h2>
//           <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Templates <span>-&gt;</span>
//           </h2>
//           <p>Explore the Next.js 13 playground.</p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Deploy <span>-&gt;</span>
//           </h2>
//           <p>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   )
// }
