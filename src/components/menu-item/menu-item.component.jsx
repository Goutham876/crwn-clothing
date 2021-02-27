import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className='background-image'
      style={{
        background: `url(${imageUrl})`,
        position: "center",
        backgroundSize: "cover",
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='sibtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;