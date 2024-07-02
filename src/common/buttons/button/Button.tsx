import styles from './Button.module.css'
import { HTMLProps } from "react"

interface ButtonProps extends HTMLProps<HTMLButtonElement> { }

export const Button = ({ children }: ButtonProps) => {
   return (
      <button className={styles.button}>{children}</button>
   )
}

