import Text from '../Text/Text'
import styles from "./styles/productCard.module.scss"
import { CardProps } from './types'
import typography from "../../styles/_typography.module.scss"
import CardTag from './components/CardTag'
import Button from '../Button/Button'
import IconSVG from '../Icon_svg/IconSVG'
import { arrowRight } from '../Icon_svg'
import Favorite from './components/Favorite'
import Condition from './components/Condition'
import StarsRating from './components/StarsRating'
function ProductCard({className, style, item}: CardProps) {
  return (
    <div style={style} className={`${styles.cardContainer} ${className || ""}`}>
      <div className={styles.upperIconswrapper}>
        <Favorite isFavorite={item.favorite} id={"1"}/>
        <Condition condition={item.condition}/>
      </div>
      <img src={item.image[0]}></img>
      <div className={styles.cardInfoWrapper}>
        <div className={styles.infoBrandRating}>
          <Text subtitle className={typography.subtitleArch}>
            {`${item.brand} | ${item.year}`}
          </Text>
          <StarsRating stars_qty={item.stars} rating={item.rating}/>
        </div>
        <div>
          <Text title className={typography.cardTitle}>
            {item.title}
          </Text>
          <Text className={typography.cardDescription}>{item.description}</Text>
        </div>
        <div>
          <CardTag label={"E-BIKE"} 
                   content={item.eBike} 
                   mode={"primary"}
                   style={{marginBottom: "16px"}} />
          <CardTag
            label={"colori"}
            content={item.colori_qty.toString()}
            mode={"secondary"}
            style={{marginBottom: "4px"}}
          />
          <CardTag
            label={"taglia"}
            content={item.taglia.join(" ")}
            mode={"secondary"}
          />
        </div>
        <div className={styles.cardPriceWrapper}>
          <Text className={styles.cardPrice}>{`${item.currency}${item.price}`}</Text>
          {item.old_price && (
            <Text className={styles.cardOldPrice}>{`${item.currency}${item.old_price}`}</Text>
          )}
        </div>
      </div>
      <div className={styles.cardCtaWrapper}>
        <span className={styles.checkboxCompWrapper}>
          <input type={"checkbox"}/>
          <Text label className={typography.subtitleLabel}> COMPARA</Text>
        </span>
        <Button label='SCOPRI' 
                className={styles.btnScopri}
                icon={<IconSVG iconProps={arrowRight}/>}/>
      </div>
    </div>
  );
}

export default ProductCard