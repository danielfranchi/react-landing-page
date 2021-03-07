import React from "react";
import ImgCard from "../../images/FeaturesCard/ImgCard";
import ImgCard2 from "../../images/FeaturesCard/ImgCard2";
import ImgCard3 from "../../images/FeaturesCard/ImgCard3";
import ImgCard4 from "../../images/FeaturesCard/ImgCard4";
import ButtonFeatures from "../ButtonFeatures/ButtonFeatures";

import "../../styles/FeaturesCard/FeaturesCard.css";

interface FeaturesCardText {
  title: string;
  paragraph: string;
  img: string;
}

const FeaturesCard = (props: FeaturesCardText) => {
  return (
    <section className="features">
      <div className="card-img">
        {(props.img === "img1" && <ImgCard />) ||
          (props.img === "img2" && <ImgCard2 />) ||
          (props.img === "img3" && <ImgCard3 />) ||
          (props.img === "img4" && <ImgCard4 />)}
      </div>

      <div id="card-text">
        <div id="title">
          <h3>{props.title}</h3>
        </div>
        <div id="paragraph">
          <p>{props.paragraph}</p>
        </div>

        <div id="btn">
          <ButtonFeatures />
        </div>
      </div>
    </section>
  );
};

export default FeaturesCard;
