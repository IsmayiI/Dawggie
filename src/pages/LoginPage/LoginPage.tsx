import styles from './LoginPage.module.css'
import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, PasswordInput } from '@common/fields'
import { Button } from '@common/buttons'

interface FormErrors {
   username: string | null
   password: string | null
}

const validateIsEmpty = (value: string) => {
   if (!value) return 'field required'
   return null
}

const validatePassword = (value: string) => {
   return validateIsEmpty(value)
}


const validateUsername = (value: string) => {
   return validateIsEmpty(value)
}

const loginFormValidateShema = {
   username: validateUsername,
   password: validatePassword
}

const validateLoginForm = <T extends keyof typeof loginFormValidateShema>(name: T, value: string) => {
   return loginFormValidateShema[name](value)
}



export const LoginPage = () => {
   const [formValues, setFormValues] = useState({ username: '', password: '' })
   const [formErrors, setFormErrors] = useState<FormErrors>({ username: null, password: null })
   const navigate = useNavigate()

   return (
      <div className={styles.page}>
         <div className={styles.container}>
            <div className={styles.headerContainer}>DAWGGIE</div>

            <div className={styles.formContainer}>
               <div className={styles.inputContainer}>
                  <Input
                     label='username'
                     value={formValues.username}
                     onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        const username = e.target.value
                        setFormValues({ ...formValues, username })
                        const error = validateLoginForm('username', username)
                        setFormErrors({ ...formErrors, username: error })
                     }}
                     {...(!!formErrors.username && {
                        isError: !!formErrors.username,
                        helperText: formErrors.username
                     })} />
               </div>

               <div className={styles.inputContainer}>
                  <PasswordInput
                     value={formValues.password}
                     placeholder='password'
                     onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        const password = e.target.value
                        setFormValues({ ...formValues, password })
                        const error = validateLoginForm('password', password)
                        setFormErrors({ ...formErrors, password: error })
                     }}
                     {...(!!formErrors.password && {
                        isError: !!formErrors.password,
                        helperText: formErrors.password
                     })} />
               </div>

               <div>
                  <Button>Sign in</Button>
               </div>
            </div>

            <div className={styles.singUpContainer}
               onClick={() => navigate('/registration')} >Create new account</div>
         </div>
      </div>
   )
}