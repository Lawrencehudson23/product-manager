import React from 'react';
import './App.css';
import NewProduct from './views/NewProduct';
import {Router,Link} from '@reach/router';
import Products from './components/Products';
import Detail from './views/Detail';
import UpdateProduct from './views/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Link to={"/products/new"}>Create</Link>{"  "}
      <Link to="/products">Products</Link>
      <Router>
        <NewProduct path="/products/new"/>
        <Products path="/products"/>
        <Detail path="/products/:id"/>
        <UpdateProduct  path="/products/:id/edit"/>
      </Router>      
    </div>
  );
}

export default App;
