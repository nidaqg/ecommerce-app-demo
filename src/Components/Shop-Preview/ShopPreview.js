import React from "react";
import "./ShopPreviewStyles.scss";
import { useNavigate } from "react-router-dom";

import PreviewItem from "../Preview-Item/PreviewItem";

export const ShopPreview = ({ title, items }) => {

  let navigate = useNavigate();

  return (
    <div className="collection-preview">
      <h1 
      onClick={()=> {navigate(`${title.toLowerCase()}`)}}
      className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
              <PreviewItem
              key={item.id}
              item={item}
              />
          ))}
      </div>
    </div>
  );
};
