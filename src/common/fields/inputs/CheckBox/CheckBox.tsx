
import styles from './CheckBox.module.css'

export const CheckBox = ({ label, ...props }: InputProps) => {
   return (
      <label className={styles.checkboxContainer}>
         <input className={styles.checkbox} type='checkbox' checked={props.checked} {...props} />
         <span className={styles.customCheckbox} />
         <span className={styles.label}>{label}</span>
      </label>
   )
}
