import React from "react";

function ItemIphone() {
    const imgSrc = [
        {
            src: "../img/iphone1.jpg"
        },
        {
            src: "../img/iphone2.jpg"
        },
        {
            src: "../img/iphone3.jpg"
        },
    ]

  return (
    <div className="col-3">
      <img src="../img/iphone1.jpg" alt="" />
      <div className="iphone-content">
        <p>Apple new macbook</p>
        <p>$999</p>
        <button type="button">Add to cart</button>
      </div>
    </div>
  );
}

export class IphoneItem extends React.Component {
  render() {
    return (
      <div className="container my-iphone-item">
        <div className="row">
          <ItemIphone></ItemIphone>
          <div className="col-3">
            <img src="../img/iphone2.png" alt="" />
            <div className="iphone-content">
              <p>Apple new macbook</p>
              <p>$999</p>
              <button type="button">Add to cart</button>
            </div>
          </div>
          <div className="col-3">
            <img src="../img/iphone3.png" alt="" />
            <div className="iphone-content">
              <p>Apple new macbook</p>
              <p>$999</p>
              <button type="button">Add to cart</button>
            </div>
          </div>
          <div className="col-3">
            <img src="../img/iphone1.jpg" alt="" />
            <div className="iphone-content">
              <p>Apple new macbook</p>
              <p>$999</p>
              <button type="button">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
