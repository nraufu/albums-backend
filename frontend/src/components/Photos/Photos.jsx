import React from "react";
import Photo from "./Photo/Photo";
import "./Photos.scss";

const Photos = ({ photos }) => {
  return (
    <div className="photos">
      {photos.map((i) => (
        <Photo key={i.id} thumbnailUrl={i.thumbnailUrl} title={i.title} />
      ))}
    </div>
  );
};

export default Photos;
