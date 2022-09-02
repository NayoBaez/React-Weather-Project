import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        {props.photos.map(function (photo, index) {
          return (
            <div key={index}>
              <a
                href={photo.src.original}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt={photo.alt}
                  src={photo.src.landscape}
                  className="img-fluid"
                />
              </a>
            </div>
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}
