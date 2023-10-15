import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Select } from "antd";
import "../style.css";
import ProductItem from "./ProductItem";
const ProductSell = () => {
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="product_main">
      <div className="product">
        <div className="product_head">
          <p className="product_sell">Product Sell</p>
          <p className="product_name">Product Name</p>
        </div>
        <div className="product_input-select">
          <div className="product_head_search" style={{ display: "flex", justifyContent :'right' }}>
            <div style={{display:'contents'}}>
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
              placeholder="Quarterly"
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
          <p className="product_names">Product Name</p>
          <p className="product_names">Product Name</p>
          <p className="product_names">Product Name</p>
        </div>
        </div>
      </div>
      <hr style={{ color: "#424242", margin: "0" }} />
      <ProductItem />
    </div>
  );
};

export default ProductSell;
