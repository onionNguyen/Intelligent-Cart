import React,{useState} from "react";
import Search from "../components/Search";
import Navigation from "../shared/components/Navigation";
import Productdata from '../components/Product_data.json';
import ProductList from "../components/ProductList";

const SearchPage= (props) =>{


    const [productValue, setProductValue] = useState(null);
    const getSearchValue = (childData) => {
        setProductValue(childData);
    }
    console.log(productValue);

    const searchProduct = Productdata.filter(product => product.product_name === productValue);

return(
        <React.Fragment>
            <Navigation />
            <Search name ={getSearchValue}/>
            <ProductList items = {searchProduct}/>
        </React.Fragment>


)

}
export default SearchPage;