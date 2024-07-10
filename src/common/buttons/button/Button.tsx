import styles from './Button.module.css'
import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   isLoading?: boolean;
}
export const Button = ({ children }: ButtonProps) => {
   return (
      <button className={styles.button}>{children}</button>
   )
}

