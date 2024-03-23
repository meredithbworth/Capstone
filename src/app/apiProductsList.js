import React from "react";
import { useState } from "react";
import { useEffect} from "react;"
import ProductRow from './ProductRow';


export default function ProductsList({setSelectedProductId, product}) {
    const [products, setProducts] = useState([])


    useEffect(()=> {
        async function fetchProducts() {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            console.log(response);
            const result = await response.json();  
            setContacts(result); 
            // console.log(contacts);          
        } catch (error) {
            console.log(error);
        }
        }
    fetchProducts();
    }, [])

  return (
    <table>
          <thead>
            <tr>
              <th colSpan="3">Product List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Title</td>
              <td>Price</td>
              <td>Category</td>
            </tr>
            { products.map((product) => {
              return <ProductRow key={product.id} product={product} setSelectedProductId={setSelectedProductId}/>
            })
             }
          </tbody>
        </table>
  );

}