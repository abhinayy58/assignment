import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Select } from "antd";
import * as data from '../data'
import "../style.css";
import ProductItem from "./ProductItem";
const ProductSell = () => {
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="product_main">
       <div className="scrollable-div">
      <div className="product">
        <div className="product_head">
          <p className="product_sell">Product Sell</p>
          <p className="product_name">Product Name</p>
        </div>
        <div className="product_input-select">
          <div className="product_head_search" style={{ display: "flex", justifyContent :'right' }}>
            <div style={{display:'flex'}}>
            <div>
              <SearchOutlined className="search_icon" />
            </div>
            <input
              className="search_input"
              type="search"
              placeholder="Search"
            />
          </div>
          <div>
            <Select
              placeholder="Last 30 days"
              optionFilterProp="children"
              onChange={onChange}
              options={[
                {
                  value: "monthly",
                  label: "Monthly",
                },
                {
                  value: "quarterly",
                  label: "Quarterly",
                },
                {
                  value: "biyearly",
                  label: "Biyearly",
                },
                {
                  value: "Yearly",
                  label: "Yearly",
                },
              ]}
            />
          </div>
          </div>
          <div className="product_heads">
          <p className="product_names">Stock</p>
          <p className="product_names">Price</p>
          <p className="product_names">Total Sales</p>
        </div>
        </div>
      </div>
      <hr style={{ color: "#424242", margin: "0" }} />
      <ProductItem data={data.productSell}/>
     </div>
    </div>
  );
};

export default ProductSell;
