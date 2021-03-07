import FeaturesCard from "../FeaturesCard/FeaturesCard";
import "../../styles/Features/Features.css";

const Features = () => {
  return (
    <section>
      <div id="features-paragraph">
        <h1>Features</h1> <br />
        <p>
          Some of the features and advantages that we provide for those of you{" "}
          <br />
          who store data in this Data Warehouse.
        </p>
      </div>

      <div id="features-container">
        <div>
          <FeaturesCard
            title="Search Data"
            paragraph="Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time."
            img="img1"
          />
        </div>
        <div>
          <FeaturesCard
            title="24 Hours Access"
            paragraph="Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent."
            img="img2"
          />
        </div>
        <div>
          <FeaturesCard
            title="Print Out"
            paragraph="Print out service gives you convenience if someday you need print data, just edit it all and just print it."
            img="img3"
          />
        </div>
        <div>
          <FeaturesCard
            title="Security Code"
            paragraph="Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file."
            img="img4"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
