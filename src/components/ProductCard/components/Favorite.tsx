import React, { useState } from "react";
import { favorite_off, favorite_on } from "../../Icon_svg";
import IconSVG from "../../Icon_svg/IconSVG";
import { favoriteProps } from "../types";
import styles from "../styles/productCard.module.scss";

function Favorite({ isFavorite = false }: favoriteProps) {
  const [favorite, setFavorite] = useState(isFavorite)

  return (
    <IconSVG
      className={styles.favoriteBtn}
      iconProps={favorite ? favorite_on : favorite_off}
      onClick={()=> setFavorite((prev)=> !prev)}
    />
  );
}

export default Favorite;
