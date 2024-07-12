import styles from '../Input.module.css'



export const Input = ({ isError = false, helperText, label, ...props }: InputProps) => (
   <>
      <div className={`${styles.container} ${isError ? styles.container : ''}`}>
         <input
            id='username'
            placeholder=''
            className={styles.input}
            {...props} />
         <label htmlFor="username" className={styles.label}>
            {label}
         </label>
      </div>
      {isError && helperText && <div className={styles.helperText}>{helperText}</div>}
   </>
)
