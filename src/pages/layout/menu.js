import React from "react";
import logoHome from "../../img/logo-home.png";
import Avatar from "antd/lib/avatar/avatar";
import { Row, Col } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function MenuComponent() {
  return (
    <div className="menu">
      <Row>
        <Col className="left" xl={6}>
          <Avatar
            className="icon-home"
            src={logoHome}
            style={{ height: "80px", width: "200px" }}
          ></Avatar>
        </Col>
        <Col className="search-bar" xl={15}>
          <ul className="main-menu">
            <li>
              <Link to="/">
                <h2>Character</h2>
              </Link>
            </li>
            <li>
              <Link to="/">
                <h2>Commic</h2>
              </Link>
            </li>
            <li>
              <Link to="/">
                <h2>Sticker</h2>
              </Link>
            </li>
            <li>
              <Link to="/">
                <h2>News</h2>
              </Link>
            </li>
            <li>
              <Link to="/">
                <h2>Shop</h2>
              </Link>
            </li>
            <li>
              <Link to="/">
                <h2>Contact</h2>
              </Link>
            </li>
          </ul>
        </Col>
        <Col className="right" style={{ fontSize: "2em" }} xl={3}>
          <MenuOutlined className="menu-other" />
        </Col>
      </Row>
    </div>
  );
}
