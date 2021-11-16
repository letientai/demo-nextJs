import React from "react";
import { getProductIds } from "../index";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import axios from "axios";
const ProductDetail = ({ post }) => {
  return (
    <div>
      <div className="detail-product-name">{post.name}</div>
      <div className="detail-status">
        <p>Tình trạng: Còn hàng</p>
        <p style={{ marginLeft: "20px" }}>Bảo hành: 24 tháng</p>
      </div>
      <hr />
      <div className="detail-container">
        <div className="detail-left">
          <img className="detail-image" src={post.images[0]} />
        </div>
        <div className="detail-main">
          <p>
            Giá bán: <span>{post.price} VND</span>
          </p>
          <div className="detail-discount">
            <div className="discount-top">
              <p>Khuyến mãi - Quà tặng</p>
            </div>
            <div className="discount-content">something</div>
          </div>
          <div className="detail-buy">
            <Button variant="dark">Mua ngay</Button>
            <p>
              GỌI NGAY <a href="tel:+84916786817"> 0916 786 817 </a> ĐỂ GIỮ HÀNG
            </p>
          </div>
        </div>
        <div className="detail-right">
          <div>
            <span>Điện thoại tư vấn - Đặt hàng</span>
            <ul>
              <li>Kim Lý - 0904 555 666</li>
              <li>Huỳnh Lệ - 0345 789 789</li>
              <li>Văn Dũng - 0876 567 678</li>
            </ul>
          </div>
          <div>
            <span>Địa chỉ mua hàng</span>
            <ul>
              <li>152 ABC, Thanh Khê, TP. Đà Nẵng</li>
              <li>162 ABC, Thanh Khê, TP. Đà Nẵng</li>
              <li>172 ABC, Thanh Khê, TP. Đà Nẵng</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="specifications">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Phần cứng</th>
              <th>Thông số kĩ thuật</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Modal</td>
              <td>{post.model}</td>
            </tr>
            <tr>
              <td>Cpu</td>
              <td>{post.cpu}</td>
            </tr>
            <tr>
              <td>Ram</td>
              <td>{post.ram}</td>
            </tr>
            <tr>
              <td>Ổ cứng</td>
              <td>{post.disk}</td>
            </tr>
            <tr>
              <td>Card đồ họa</td>
              <td>{post.card}</td>
            </tr>
            <tr>
              <td>Màn hình</td>
              <td>{post.monitor}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const paths = await getProductIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await axios.get(
    `https://lap-center.herokuapp.com/api/product/getProductById/${params.id}`
  );
  const post = await res.data.response;
  return {
    props: {
      post,
    },
  };
};
export default ProductDetail;
