import React, { useState,useEffect } from 'react';
// import Form from '../components/Form';
import axios from "axios";
import { navigate } from '@reach/router';
export default function UpdateProduct({id}) {
   const [product, setProduct] = useState(null);
//    const [loaded, setLoaded] = useState(false);
   useEffect(() => {
    axios
      .get("http://localhost:5000/api/products/"+id)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));     
   }, [id])

   function handleChange(event) {
    const {name, value} = event.target

    setProduct({
        ...product,
        [name]:value
    }) 
}
   function handleSubmit(event){
       event.preventDefault();
       
       axios.put("http://localhost:5000/api/products/"+id+"/edit",product)
        .then(res => navigate("/products/"+res.data._id))
   }


   return product==null ? 'Loading...' : 
   <form onSubmit={handleSubmit}>
   <div>
       <label>Title:</label>
       <input type="text" name="title" value={product.title} onChange={handleChange}/>
   </div>
   <div>
       <label>Price:</label>
       <input type="number" name="price" value={product.price} onChange={handleChange}/>
   </div>
   <div>
       <label>Description</label>
       <input type="text" name="description" value={product.description} onChange={handleChange}/>
   </div>
   <button>Submit </button>
    </form>
}