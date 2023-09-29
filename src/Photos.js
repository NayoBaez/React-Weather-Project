import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section>
        <div className="Photos">
          <a
            href={props.photos[1].src.original}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt={props.photos[1].alt}
              src={props.photos[1].src.landscape}
              className="img-fluid"
            />
          </a>
        </div>
      </section>
    );
  } else {
    return null;
  }
}