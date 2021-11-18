import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Icon } from "semantic-ui-react";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col xs={4} className="col1">
            <p>LAPCENTER</p>
            <ul>
              <li>
                {" "}
                <Icon name="phone volume" />
                Phone: 0916786817
              </li>
              <li>
                {" "}
                <Icon name="mail" />
                Email: letai97md@gmail.com
              </li>
              <li>
                {" "}
                <Icon name="facebook" />
                <Icon name="twitter" />
                <Icon name="google plus" />
                <Icon name="globe" />
              </li>
            </ul>
          </Col>
          <Col>
            <p>COMPANY</p>
            <ul>
              <li>AboutUs</li>
              <li>Block</li>
              <li>Contact</li>
            </ul>
          </Col>
          <Col>
            <p>Link</p>
            <ul>
              <li>Courses</li>
              <li>Even</li>
              <li>Gallaey</li>
            </ul>
          </Col>
          <Col>
            <p>SUPPORT</p>
            <ul>
              <li>Documentation</li>
              <li>Forums</li>
              <li>Language</li>
            </ul>
          </Col>
          <Col>
            <p>RECOMMEND</p>
            <ul>
              <li>WordPress</li>
              <li>LearPress</li>
            </ul>
          </Col>
        </Row>
        <span>By: Lê Tiến Tài</span>
        <hr />
      </Container>
    </div>
  );
};

export default Footer;
