import styles from '../Input.module.css'
import passwordStyles from './PasswordInput.module.css'
import { useRef, useState } from "react"
import { CloseSVG, ShowSVG } from '@images'


export const PasswordInput = ({ isError = false, helperText, label, ...props }: InputProps) => {
   const [showPassword, setShowPassword] = useState(false)
   const [isFocus, setIsFocus] = useState(!!props.value ?? false)

   const inputRef = useRef<HTMLInputElement>(null)

   const showPasswordToggle = props.value

   const inputStyle = `${styles.input} ${isError ? styles.error : ''}`
   const inputType = showPasswordToggle && showPassword ? 'text' : 'password'



   return (
      <>
         <div className={`${styles.container} ${isError ? styles.container : ''} ${isFocus ? styles.focused : ''}`}
            onClick={() => {
               inputRef.current?.focus()
               setIsFocus(true)
            }}>
            <label className={styles.label}>{label}</label>
            <input ref={inputRef} onBlur={() => !props.value && setIsFocus(false)} className={inputStyle} type={inputType} {...props} />
            {
               showPasswordToggle &&
               <div className={passwordStyles.passwordContainer}
                  onClick={() => setShowPassword(prev => !prev)}>
                  {showPassword ?
                     <CloseSVG /> :
                     <ShowSVG />}
               </div>
            }
         </div>
         {isError && helperText && <div className={styles.helperText}>{helperText}</div>}
      </>
   )
}




