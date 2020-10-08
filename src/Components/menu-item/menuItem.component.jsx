import React from "react";
import "./menuItem.style.css";

const MenuItem = ({ title, subtitle, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h3 className="title">{title.toUpperCase()}</h3>
        <span className="subtitle">{subtitle.toUpperCase()}</span>
      </div>
    </div>
  );
};

export default MenuItem;
