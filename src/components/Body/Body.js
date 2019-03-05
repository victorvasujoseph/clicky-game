import React from "react";
import "./Body.css";

function Body(props) {
  return (
    <div>
      <div className="container">
          {props.images.map(value => {
              return (
                  <img className="imageCard" key={value.id} src={value.image} alt={value.image} onClick={() => props.imageClickHandler(value.id)}/>
              );
          })}
      </div>
    </div>
  );
}

export default Body;
