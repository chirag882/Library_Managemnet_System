import React from "react";
import "./style.scss";
import logo from "../../assets/batman.jpeg";
const BookCard = () => {
  return (
    <div className="content">
      <div className="posterBlock">
        <div class="container">
          <img className="posterImg" src={logo} alt="" />
          <div class="t">
            <h3>Add to Cart</h3>
          </div>
        </div>
      </div>
      <div className="textBlock">
        <span className="title">Batman Begins</span>
        <span className="date">21/01/20002</span>
      </div>
    </div>
  );
};

export default BookCard;
