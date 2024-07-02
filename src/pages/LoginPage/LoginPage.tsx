
import styles from './LoginPage.module.css'
import { ChangeEvent, useState } from 'react'
import { Input } from '../../common/fields'
import { Button } from '../../common/buttons'

const LoginPage = () => {
   const [formValues, setFormValues] = useState({ username: '', password: '' })



   return (
      <div className={styles.login_page}>
         <div className={styles.container}>
            <div>Header</div>
            <div className={styles.form_container}>
               <div className={styles.input_container}>
                  <Input
                     isError
                     helperText='validation'
                     placeholder='username'
                     value={formValues.username}
                     onChange={(e: ChangeEvent<HTMLInputElement>) => setFormValues({ ...formValues, username: e.target.value })} />
               </div>
               <div className={styles.input_container}>
                  <Input
                     value={formValues.password}
                     placeholder='password'
                     onChange={(e: ChangeEvent<HTMLInputElement>) => setFormValues({ ...formValues, password: e.target.value })} />
               </div>
               <div>
                  <Button>Sign in</Button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default LoginPage