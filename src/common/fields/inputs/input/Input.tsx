import styles from './Input.module.css'
import { HTMLProps } from "react"


interface InputProps extends HTMLProps<HTMLInputElement> {
   isError?: boolean,
   helperText?: string
}

export const Input = ({ isError = false, helperText, ...props }: InputProps) => {
   const classname = isError ? `${styles.input} ${styles.input_error}` : `${styles.input}`
   return (
      <>
         <input className={classname} {...props} />
         {isError && helperText && <div className={styles.input_helper_text}>{helperText}</div>}
      </>
   )
}


