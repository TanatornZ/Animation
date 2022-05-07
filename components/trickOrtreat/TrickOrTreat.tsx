import React from "react";
import TitleSection from "../TitleSection";
import { trickOrTreat } from "../../Json/trickOrTreat";
import Item from "../ProductItem";
import Fade from "react-reveal/Fade";
import { Element } from "react-scroll";

type Props = {};

function TrickOrTreat({}: Props) {
  return (
    <Element name="trick">
      <div className="pt-16 md:pt-24 lg:py-24 px-5 max-w-3xl mx-auto overflow-hidden">
        <TitleSection title1="Trick Or Treat" />
        <Fade bottom duration={1500}>
          <div className="grid gap-10 grid-cols-2 mt-12 md:grid-cols-3 px-5">
            {trickOrTreat.map((item) => (
              <Item key={item.id} data={item} />
            ))}
          </div>
        </Fade>
      </div>
    </Element>
  );
}

export default TrickOrTreat;
