import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import NotFound from "./pages/notFound/notFound";
import Products from "./pages/products/products";
import ProductDetails from "./pages/products/productDetails";

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/products" element={ <Products /> } />
                <Route path="/products/:id" element={ <ProductDetails /> } />
                <Route path="*" element={ <NotFound /> } />
            </Routes>
        </div>
    );
};

export default App;
