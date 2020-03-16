import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

export default function Detail({id}) {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios
          .get("http://localhost:5000/api/products/"+id)
        //   .then(res=>console.log(res))
          .then(res => setProduct({...res.data}))
          .catch(err => console.error(err));
    }, [id])
    return (
        <div>
            <Link to={"/products/" + product._id + "/edit"}>
                Edit
            </Link>
            <h1>Title: {product.title}</h1>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>

        </div>
    )
}
