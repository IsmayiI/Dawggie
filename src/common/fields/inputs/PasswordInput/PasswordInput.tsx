import { CloseSVG, ShowSVG } from '@images'
import styles from './PasswordInput.module.css'
import { useState } from "react"


export const PasswordInput = ({ isError = false, helperText, ...props }: InputProps) => {
   const [showPassword, setShowPassword] = useState(false)

   const showPasswordToggle = props.value

   const inputStyle = `${styles.input} ${isError ? styles.error : ''}`
   const inputType = showPasswordToggle && showPassword ? 'text' : 'password'



   return (
      <div className={styles.inputContainer}>
         <input className={inputStyle} type={inputType} {...props} />
         {isError && helperText && <div className={styles.helperText}>{helperText}</div>}
         {showPasswordToggle &&
            <div className={styles.passwordContainer}
               onClick={() => setShowPassword(prev => !prev)}>
               {showPassword ?
                  <CloseSVG /> :
                  <ShowSVG />}
            </div>}
      </div>
   )
}



