import React, { CSSProperties, ReactNode } from 'react'
import Text from '../Text/Text';
import styles from "./styles/Button.module.scss"

interface ButtonProps{
    label: string;
    className?: string;
    style?: CSSProperties;
    icon?: ReactNode;
}
function Button({ label, className, icon }: ButtonProps) {
  return (
    <button className={`${styles.buttonContainer} ${className}`}>
      <Text subtitle>{label}</Text>
      {icon}
    </button>
  );
}

export default Button