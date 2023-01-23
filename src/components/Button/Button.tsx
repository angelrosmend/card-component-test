import Text from '../Text/Text';
import styles from "./styles/Button.module.scss"
import colors from "../../styles/_colors.module.scss"
import { ButtonProps } from './types';

function Button({ label, className, icon, style, mode = "primary" }: ButtonProps) {
  return (
    <button className={`${styles.buttonContainer} ${className}`}
            style={{...style, background: mode === "secondary" ? colors.grey3 : colors.mainBlack}}>
      <Text subtitle style={{color: colors.white1}}>{label}</Text>
      {icon}
    </button>
  );
}

export default Button