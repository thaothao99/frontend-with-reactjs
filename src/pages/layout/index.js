import React from "react";
import MenuComponent from "./menu";
import "./index.scss";
export default function LayoutComponent() {
  return (
    <div className="layout-container">
      <MenuComponent></MenuComponent>
    </div>
  );
}
