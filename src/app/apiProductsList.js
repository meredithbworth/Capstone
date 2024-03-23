import React from "react";
import { useState } from "react";
import { useEffect} from "react;"



export default function ProductsList({setSelectedProductId, product}) {
    const [products, setProducts] = useState([])


    useEffect(()=> {
        async function fetchProducts() {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
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
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
            { products.map((product) => {
              //By fetching individual contact list by ID, we'll be adding an 
            //   return <ProductRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId}/>
            })
             }
          </tbody>
        </table>
  );

}