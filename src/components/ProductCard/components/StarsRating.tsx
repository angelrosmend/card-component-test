import React from "react";
import Text from "../../Text/Text";
import typography from "../../../styles/_typography.module.scss";
import IconSVG from "../../Icon_svg/IconSVG";
import { star_off, star_on } from "../../Icon_svg";

interface starsRatingProps {
  rating: string | number;
  stars_qty: number;
}
function StarsRating({ rating, stars_qty }: starsRatingProps) {
  return (
    <span style={{ display: "flex", gap: "4px" }}>
      {[...Array(5)].map((_, index) => {
        return <IconSVG iconProps={index < stars_qty ? star_on : star_off} />;
      })}
      <Text subtitle className={typography.subtitleArchI}>
        {rating}
      </Text>
    </span>
  );
}

export default StarsRating;
