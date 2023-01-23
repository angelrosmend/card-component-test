/*Card Components */
import CardPrice from "./components/CardPrice";
import CardTag from "./components/CardTag";
import Favorite from "./components/Favorite";
import Condition from "./components/Condition";
import StarsRating from "./components/StarsRating";
import CardImage from "./components/Image";

/* App Components */
import Text from "../Text/Text";
import IconSVG from "../Icon_svg/IconSVG";
import Button from "../Button/Button";
import { arrowRight } from "../Icon_svg";

/*styles*/
import "./styles/imageSliderOverride.css";
import styles from "./styles/productCard.module.scss";
import typography from "../../styles/_typography.module.scss";

/* types*/
import { CardProps } from "./types";

function ProductCard({ className, style, item }: CardProps) {
  return (
    <div style={style} className={`${styles.cardContainer} ${className || ""}`}>
      <div className={styles.upperIconswrapper}>
        <Favorite isFavorite={item.favorite} id={"1"} />
        <Condition condition={item.condition} />
      </div>
      <CardImage images={item.image} />
      <div className={styles.cardInfoWrapper}>
        <div className={styles.infoBrandRating}>
          <Text subtitle className={typography.subtitleArch}>
            {`${item.brand} | ${item.year}`}
          </Text>
          <StarsRating stars_qty={item.stars} rating={item.rating} />
        </div>
        <div>
          <Text title className={typography.cardTitle}>
            {item.title}
          </Text>
          <Text className={typography.cardDescription}>{item.description}</Text>
        </div>
        <div>
          <CardTag
            label={"E-BIKE"}
            content={item.eBike}
            mode={"primary"}
            style={{ marginBottom: "16px" }}
          />
          <CardTag
            label={"colori"}
            content={item.colori_qty.toString()}
            mode={"secondary"}
            style={{ marginBottom: "4px" }}
          />
          <CardTag
            label={"taglia"}
            content={item.taglia.join(" ")}
            mode={"secondary"}
          />
        </div>
        <CardPrice
          currentPrice={item.price}
          oldPrice={item.old_price}
          currency={item.currency}
        />
      </div>
      <div className={styles.cardCtaWrapper}>
        <span className={styles.checkboxCompWrapper}>
          <input type={"checkbox"} />
          <Text label className={typography.subtitleLabel}>
            COMPARA
          </Text>
        </span>
        <Button
          label="SCOPRI"
          className={styles.btnScopri}
          icon={<IconSVG iconProps={arrowRight} />}
        />
      </div>
    </div>
  );
}

export default ProductCard;