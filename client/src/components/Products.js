import React,{useEffect,useState} from 'react'
import axios from "axios";
import {Link} from "@reach/router";


export default function Products() {
    const [products, setProducts] = useState(null);
    useEffect(() => {
        axios
          .get("http://localhost:5000/api/products")
        //   .then(res=>console.log(res))
          .then(res => setProducts(res.data))
          .catch(err => console.error(err));
    }, [])

    function deleteProduct(id){
        axios
          .delete("http://localhost:5000/api/products/"+id)
          .then(res => setProducts(products.filter((product)=>product._id !== id)))
          .catch(err => console.error(err));
    }

    return products==null ? "Loading..." : <div>
        <h1>All Products</h1>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Actions</th>
                </tr> 
            </thead>
            <tbody>
                {products.map((product)=>(
                    <tr key={product._id}>
                        <td>
                            <Link to={"/products/" + product._id}>
                                {product.title}
                            </Link>
                        </td>
                        <td>
                            <Link to={"/products/"+product._id +"/edit"}>
                                <button>Edit</button>{" "}
                            </Link>
                            <button onClick={()=> deleteProduct(product._id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>

        </table>
    </div>;
}
