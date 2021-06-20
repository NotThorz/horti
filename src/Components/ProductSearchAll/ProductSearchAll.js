import React from 'react'
import { useState } from 'react';
import {ProductStock} from './ProductList'
import './ProductSearchAll.css'
import SingleProduct from './SingleProduct'
const ProductSearchAll = () => {
    const [SearchTerm,SetSearchTerm] =useState("");
    var Filtered=ProductStock.filter((value)=>{
        if(SearchTerm===""){
            return value
        }
        else{
            return value.name.toLowerCase().includes(SearchTerm.toLowerCase())
        }})
        
    return (
        <div className="maindiv">
            <div className="input__div">
            <input type="text" placeholder="Search.."
            onChange={(event)=>{
                SetSearchTerm(event.target.value)
            }} /></div>   
            
            {
             
            Filtered.map((product)=>{
                return(
                   <SingleProduct product={product} />
                )
            })}
            
            
            
        
            
        </div>

             
             
             
             

    )
}

export default ProductSearchAll
