import Text from "../../Text/Text";
import styles from "../styles/productCard.module.scss";
import typography from "../../../styles/_typography.module.scss";
import { cardTagProps } from "../types";

function CardTag({ label, content, mode, style }: cardTagProps) {
  return (
    <div
      style={style}
      className={`${
        mode === "primary" ? styles.cardTagPrimary : styles.cardTagSecondary
      }`}
    >
      <Text label className={typography.cardTags}>
        {label}
      </Text>
      <Text className={typography.cardTags}>{content}</Text>
    </div>
  );
}

export default CardTag;
