import React from "react";
import Img2 from "../../images/Img2/Img2";
import "../../styles/Card/Card.css";

function Card() {
  return (
    <section>
      <div className="card">
        <Img2 />
        <div className="card-container">
          <h1>We are a high-level data storage bank</h1>
          <p>
            The place to store various data that you can access at any time
            through the internet and where you can carry it. This very flexible
            storage area has a high level of security. To enter into your own
            data you must enter the password that you created when you
            registered in this Data Warehouse.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Card;
