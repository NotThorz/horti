import React from 'react'
import { ProductSet } from './ProductSet'
import { Grid } from '@material-ui/core';
import './Products.css'
import Product from './Product';
import { Link } from 'react-router-dom';
const Products = () => {
    return (
        <main>
            <Grid container justify="center" sapcing={4}>
                {
                    ProductSet.map((product) => (
                        <Grid item key={product.id} xd={12} sm={4} md={4} lg={4}>
                            <Product product={product} />
                        </Grid>
                    ))
                }
            </Grid>
            <div >
                <Link to="/Products" alt="produit" className="seemore" onClick={window.onbeforeunload = function () {
                    window.scrollTo(0, 0);
                }}
                ><p>Voir Plus</p></Link>
            </div>
        </main >

    )
}

export default Products
