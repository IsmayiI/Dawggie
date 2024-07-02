import styles from './Input.module.css'
import { HTMLProps } from "react"


interface InputProps extends HTMLProps<HTMLInputElement> {
   isError?: boolean,
   helperText?: string
}

export const Input = ({ isError = false, helperText, ...props }: InputProps) => {
   return (
      <>
         <input className={`${styles.input} ${isError ? styles.error : ''}`} {...props} />
         {isError && helperText && <div className={styles.helperText}>{helperText}</div>}
      </>
   )
}


