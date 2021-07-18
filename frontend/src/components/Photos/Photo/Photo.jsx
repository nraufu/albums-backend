import React from "react";
import "./Photo.scss";

const Photo = ({ thumbnailUrl, title }) => {
  return (
    <div className="photo">
      <img src={thumbnailUrl} alt="thumbnail" />
      <p>{title}</p>
    </div>
  );
};

export default Photo;
