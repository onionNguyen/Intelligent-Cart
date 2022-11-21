import { useState } from "react";
import Product_data from './Product_data.json';
import "./Search.css";
import ProductItem from "./ProductItem";
var data = require("./Product_data.json");
export default function Search() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };

  return (
    <div className="Search">
      <div>Search Product</div>

      <div className="search-container">
        <div className="search-inner">
          <input type="text" value={value} onChange={onChange} />
          <button onClick={() => onSearch(value)}> Search </button>
        </div>
        <div className="dropdown">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const product_name = item.product_name.toLowerCase();
          
              return (
                searchTerm &&
                product_name.startsWith(searchTerm) &&
                product_name !== searchTerm
                

              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.product_name)}
                className="dropdown-row"
                key={item.product_name}
              >
                {item.product_name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}