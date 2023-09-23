import React from "react";
import "./style.scss";
const BookCard = ({data}) => {
  // const url = `../../assets/${data.imageLink}`
  // console.log(url);
  // const url = "";
  // console.log(data.imageLink);
  const name = data.title.slice(0, 25);
  return (
    <div className="content">
      <div className="posterBlock">
        <div class="container">
          <img className="posterImg" src={require(`../../assets/${data.imageLink}`)} alt="" />
          <div class="t">
            <h3>Add to Cart</h3>
          </div>
        </div>
      </div>
      <div className="textBlock">
        <span className="title">{name}</span>
        <span className="date">{data.year}</span>
      </div>
    </div>
  );
};

export default BookCard;
