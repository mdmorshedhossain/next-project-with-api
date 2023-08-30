import Link from 'next/link';
import productsDataArr from '../../../public/productsJSON.json';

function ProductList({ products }) {
    console.log("products :", products);
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {productsDataArr.map((item) => (
          <li key={item.id}>
            <Link href={`/products/${item.id}`} passHref>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const products = productsDataArr; // Use the imported data directly
// const response = await fetch('./productsJSON.json'); // Adjust the path as needed
// const products = await response.json();
console.log("products", products);

  return {
    props: {
    //   products,
    products: products.default,
    },
  };
}

export default ProductList;


// // "use client"

// import Link from 'next/link';
// import productsDataArr from '../../../public/productsJSON.json';

//  function ProductList({products}) {
//   console.log("products data", products);


//   return (
//     <div>
//       <h1>Product List</h1>
//       <ul>
//         {productsDataArr.map((item) => (
//           <li key={item.id}>
//             <Link href={`/item/${item.id}`} passHref>
//              {item.title}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export async function getServerSideProps() {
//   const products = await import('../../../public/productsJSON.json');
//   console.log("products",products);
//   return {
//     props: {
//       products: products.default,
//     },
//   };
// }

// export default ProductList;