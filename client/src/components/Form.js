import React,{useState} from 'react'
import axios from "axios";
import {navigate} from '@reach/router';


export default function Form({initialState,method, url}) {
    const [product, setProduct] = useState(initialState);

    function handleChange(event){
        const {name, value} = event.target;
        setProduct({
            ...product,
            [name]:value
        })    
    }
    function handleSubmit(event) {
        event.preventDefault();
       //same  
        // axios({
        //     method: method,
        //     url: url
        // })
        axios({
            method,
            url,
            data:product
        })
            .then(res => navigate("products/"+res.data._id))

    }

    return (
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
    )
}
