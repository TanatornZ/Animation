import React from "react";
import CategoryItme from "./CategoryItme";
import { category } from "../../Json/category";
import TitleSection from "../TitleSection";
import { Fade } from "react-awesome-reveal";

type Props = {};

function Category({}: Props) {
  return (
    <Fade>
      <div className="pt-16 md:pt-24 lg:pt-32 px-5 mb-16 overflow-hidden">
        <TitleSection title1="Favorite Scare" title2="Category" />
        <div className="grid grid-cols-2 gap-10 mt-12 md:grid-cols-3 max-w-3xl mx-auto">
          {category.map((item) => (
            <CategoryItme
              key={item.id}
              title={item.title}
              description={item.description}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </Fade>
  );
}

export default Category;
