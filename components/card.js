import React from "react";
// import style from "./card.module.scss";
import Button from "react-bootstrap/Button";
import Link from "next/Link";
const Card = (props) => {
  const item = props.product;
  return (
    <Link href={`productDetail/${item._id}`}>
      <div className="card">
        <img src={item.images[0]} />
        <div className="inf">
          <b>{item.name}</b>
          <p>Hãng: {item.brand}</p>
          <p>Chip: {item.cpu}</p>
          <p>Giá: {item.price}</p>
        </div>
        <Button variant="dark">Mua hàng</Button>
      </div>
    </Link>
  );
};

export default Card;
