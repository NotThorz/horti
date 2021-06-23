import React from 'react'
// import { Link } from 'react-router-dom'
import Header from '../Components/Header/Header'
import ProductSearchAll from '../Components/ProductSearchAll/ProductSearchAll'
import './ProductSearch.css'
const ProductSearch = () => {
    return (

        <div>
            {/* // header */}
            <div>
                <Header className="ProductsHeader" id="#ProductTop" />
            </div>
            {/* //search input */}
            <div className="ProductSearchAll">
                <ProductSearchAll />
            </div>

        </div>
    )
}

export default ProductSearch
