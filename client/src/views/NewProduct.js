import React from 'react'
// import axios from "axios";
// import {navigate} from '@reach/router';
import Form from '../components/Form';


export default function NewProduct() {
    

    return (
        <Form
            initialState={{
                title:"",
                price:"",
                description:""
            }}
            method="post"
            url="http://localhost:5000/api/products/new"
        />
    )
}
