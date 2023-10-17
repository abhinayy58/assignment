import "../style.css";

type productTypeProps = {
  img: string;
  productTitle: string;
  productDesc: string;
  stock: number;
  price: number;
  totalSales: number;
};

const Product = (props: productTypeProps) => {
  return (
    <div className="products">
      <div className="product_head">
        <div className="product_name_type">
          <div>
            <img src={props.img} alt="some" loading="lazy" />
          </div>
          <div style={{ height: "50px", lineHeight: "9px" }}>
            <p className="product_sells">{props.productTitle}</p>
            <p className="product_names" style={{ paddingTop: "4px" }}>
              {props.productDesc}
            </p>
          </div>
        </div>
      </div>
      <div className="product_type">
        <p className="product_names">{props.stock} in stock</p>
        <p className="product_names price_product">$ {props.price}</p>
        <p className="product_names">{props.totalSales}</p>
      </div>
    </div>
  );
};

export default Product;
