import React from "react";
import ProductItem from './ProductItem'
import './ProductList.css'

const ProductList = (props) =>{
    if(props.items.length === 0){
        return(
            <div>
                <h2>No Product found</h2>
            </div>
        )
    }


    return(
        <ul className="place-list">
            {props.items.map((product)=>(
                <ProductItem
                    key={product.id}
                    id={product.id}
                    name = {product.product_name}
                    description={product.description}
                    price={product.price}
                    thumb = {product.thumb}
                    Department={product.Department}
                    Rating={product.Rating}
                    Categories={product.Categories}
                    Brand={product.Brand}
                    Class ={product.Class}
                />
            )
            )}
        </ul>
    )
}
export default ProductList;