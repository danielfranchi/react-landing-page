import React from "react";
import Button from "../../components/Button/Button";
import ImgMainPage from "../../images/MainPage/ImgMainPage";
import "../../styles/Headline/Headline.css";

const Headline = () => {
  return (
    <section>
      <h1 className="title">
        Save your data <br /> storage here.
      </h1>
      <div className="headline">
        <div>
          <p>
            Data Warehouse is a data storage area that has been tested for
            security, so you can store your data here safely but not be afraid
            of being stolen by others.
          </p>{" "}
          <br />
          <br />
          <Button text="Learn more" color='#FFFFFF' background='#9C69E2'/>
        </div>
        <div>
          <ImgMainPage />
        </div>
      </div>
    </section>
  );
};

export default Headline;
