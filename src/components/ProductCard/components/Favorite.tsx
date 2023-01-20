import React from "react";
import { favorite_off, favorite_on } from "../../Icon_svg";
import IconSVG from "../../Icon_svg/IconSVG";
import { favoriteProps } from "../types";
import styles from "../styles/productCard.module.scss";

function Favorite({ isFavorite }: favoriteProps) {
  return (
    <IconSVG
      className={styles.favoriteBtn}
      iconProps={isFavorite ? favorite_on : favorite_off}
    />
  );
}

export default Favorite;
