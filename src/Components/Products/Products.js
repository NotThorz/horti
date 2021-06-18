import React from 'react'
import { ProductSet } from './ProductSet'
import  {Grid}  from '@material-ui/core';
import './Products.css'
import Product from './Product';
const Products = () => {
    return (
    <main>
        <Grid container justify="center" sapcing={4}>
            {
                ProductSet.map((product)=>(
                    <Grid item key={product.id} xd={12} sm={4} md={4} lg={4}>
                    <Product product={product}/>
                    </Grid>    
                ))
            }
        </Grid>
        <div >
            <a href="#products" alt="produit"><button className="btn">See More Products</button></a>
        </div>
    </main>
    
    )
}

export default Products
