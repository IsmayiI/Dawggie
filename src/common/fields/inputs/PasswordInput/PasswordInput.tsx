import styles from '../Input.module.css'
import passwordStyles from './PasswordInput.module.css'
import { useState } from "react"
import { CloseSVG, ShowSVG } from '@images'


export const PasswordInput = ({ isError = false, helperText, label, ...props }: InputProps) => {
   const [showPassword, setShowPassword] = useState(false)


   const showPasswordToggle = props.value

   const inputStyle = `${styles.input} ${isError ? styles.error : ''}`
   const inputType = showPasswordToggle && showPassword ? 'text' : 'password'



   return (
      <>
         <div className={`${styles.container} ${isError ? styles.container : ''}`}>
            <input
               id='password'
               placeholder=''
               className={inputStyle}
               type={inputType}
               {...props} />
            <label htmlFor="password" className={styles.label}>
               {label}
            </label>
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




