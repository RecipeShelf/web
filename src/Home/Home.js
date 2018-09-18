import React from "react";

import Section from "../Section/index.js";
import RecipePreview from "../RecipePreview/index.js";
import CategoryBox from "../CategoryBox/index.js";

import starters from "./images/starters.jpg";
import lunch from "./images/lunch.jpg";
import dinner from "./images/dinner.jpg";
import dessert from "./images/dessert.jpg";
import thai from "./images/thai.jpg";
import italian from "./images/italian.jpg";
import southIndian from "./images/south_indian.jpg";
import northIndian from "./images/north_indian.jpg";

const Home = () => (
  <div>
    <Section title="Recipes for this week">
      <RecipePreview />
      <RecipePreview />
      <RecipePreview />
      <RecipePreview />
    </Section>
    <Section title="Popular collections">
      <CategoryBox title="STARTERS" imgSrc={starters} />
      <CategoryBox title="LUNCH" imgSrc={lunch} />
      <CategoryBox title="DINNER" imgSrc={dinner} />
      <CategoryBox title="DESSERT" imgSrc={dessert} />
    </Section>
    <Section title="Famous cuisines">
      <CategoryBox title="THAI" imgSrc={thai} />
      <CategoryBox title="ITALIAN" imgSrc={italian} />
      <CategoryBox title="SOUTH INDIAN" imgSrc={southIndian} />
      <CategoryBox title="NORTH INDIAN" imgSrc={northIndian} />
    </Section>
  </div>
);

export default Home;
