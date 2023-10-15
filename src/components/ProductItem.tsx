import React from "react";
import "../style.css";
import Product from "./Product";

type productProps = {
  data: any;
};

const ProductItem = (props: productProps) => {
  console.log(props.data);
  return (
    <div className="product_item">
      {props?.data?.map((product: any) => (
        <Product
          key={product.id}
          img={product.img}
          price={product.price}
          totalSales={product.totalSales}
          productTitle={product.productTitle}
          productDesc={product.productDesc}
          stock={product.stock}
        />
      ))}
    </div>
  );
};

export default ProductItem;
