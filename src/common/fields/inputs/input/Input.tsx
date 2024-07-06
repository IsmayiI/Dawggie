import styles from '../Input.module.css'
import { useRef, useState } from "react"



export const Input = ({ isError = false, helperText, label, ...props }: InputProps) => {
   const [isFocus, setIsFocus] = useState(!!props.value ?? false)

   const inputRef = useRef<HTMLInputElement>(null)

   return (
      <>
         <div className={`${styles.container} ${isError ? styles.container : ''} ${isFocus ? styles.focused : ''}`}
            onClick={() => {
               inputRef.current?.focus()
               setIsFocus(true)
            }}>
            <label className={styles.label}>{label}</label>
            <input ref={inputRef} onBlur={() => !props.value && setIsFocus(false)} className={styles.input} {...props} />
         </div>
         {isError && helperText && <div className={styles.helperText}>{helperText}</div>}
      </>
   )
}
