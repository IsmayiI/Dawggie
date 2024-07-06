import styles from './Input.module.css'
import { InputHTMLAttributes, useRef, useState } from "react"


interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'placeholder'> {
   label: string,
   isError?: boolean,
   helperText?: string
}

export const Input = ({ isError = false, helperText, label, ...props }: InputProps) => {
   const [isFocus, setIsFocus] = useState(!!props.value ?? false)

   const inputRef = useRef<HTMLInputElement>(null)

   return (
      <div className={`${styles.container} ${isError ? styles.container : ''} ${isFocus ? styles.focused : ''}`}
         onClick={() => {
            inputRef.current?.focus()
            setIsFocus(true)
         }}>
         <label className={styles.label}>{label}</label>
         <input ref={inputRef} onBlur={() => setIsFocus(false)} className={styles.input} {...props} />
         {/* {isError && helperText && <div className={styles.helperText}>{helperText}</div>} */}
      </div>
   )
}
