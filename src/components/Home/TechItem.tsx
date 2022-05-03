import {FC, HTMLProps} from "react";
import "/src/components/Home/skeletonSliderStyle.css";

const TechItem : FC<HTMLProps<HTMLDivElement>> = (props) => {

  console.log("props: ", props);
  return (
    <div className={``}>
      <img src={{...props}.img} />
      <div className="slider-item__text">
        {{...props}.text}
      </div>
    </div>
  );
};


export default TechItem;
