import React from "react";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {console.log(item)}
        {items
          .filter((item, index) => index < 4)
          .map((item) => {
            <div key={itme.id}>{item.name}</div>;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
