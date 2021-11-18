import React from "react";
import Button from "react-bootstrap/Button";
import Link from "next/Link";
import { Popup } from "semantic-ui-react";

const Card = (props) => {
  const item = props.product;
  return (
    <Link href={`productDetail/${item._id}`}>
      <div className="card">
        <img src={item.images[0]} />
        <div className="inf">
          <Popup content={item.name} trigger={<b>{item.name}</b>} />
          {/* <b>{item.name}</b> */}
          <p>Hãng: {item.brand}</p>
          <p>Chip: {item.cpu}</p>
          <p>Giá: {item.price}</p>
        </div>
        <div className="btn">
          <Button variant="dark" className="btn_buy">Mua hàng</Button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
