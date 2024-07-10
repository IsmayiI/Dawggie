import styles from './Button.module.css'
import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   isLoading?: boolean;
}
export const Button = ({ children, isLoading = false }: ButtonProps) => (
   <button className={styles.button}>
      {!isLoading && children}
      {isLoading && <div className={styles.dotFlashing} />}
   </button>
)


