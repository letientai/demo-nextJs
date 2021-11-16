import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <p>Liên hệ</p>
            <ul>
              <li>Phone: 0916786817</li>
              <li>Email: letai97md@gmail.com</li>
            </ul>
          </Col>
          <Col>
            <p>Địa chỉ cửa hàng</p>
            <ul>
              <li>Địa chỉ 1: 3/5 Trần Xuân lê - Thanh Khê - Đà Nẵng</li>
              <li>Địa chỉ 2: 337 Phan Chu Trinh - Hải Châu - Đà Nẵng</li>
            </ul>
          </Col>
        </Row>
        <span>By: Lê Tiến Tài</span>
      </Container>
    </div>
  );
};

export default Footer;
