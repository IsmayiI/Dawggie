import './LoginPage.css'
import { ChangeEvent, useState } from 'react'
import { Input } from '../../common/fields'
import { Button } from '../../common/buttons'

const LoginPage = () => {
   const [formValues, setFormValues] = useState({ username: '', password: '' })



   return (
      <div className='login_page'>
         <div className='login_page_container'>
            <div>Header</div>
            <div className='login_page_form_container'>
               <div className='login_page_input_container'>
                  <Input
                     isError
                     helperText='validation'
                     placeholder='username'
                     value={formValues.username}
                     onChange={(e: ChangeEvent<HTMLInputElement>) => setFormValues({ ...formValues, username: e.target.value })} />
               </div>
               <div className='login_page_input_container'>
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