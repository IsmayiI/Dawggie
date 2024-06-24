import './Input.css'
import { HTMLProps } from "react"


interface InputProps extends HTMLProps<HTMLInputElement> {
   isError?: boolean,
   helperText?: string
}

export const Input = ({ isError = false, helperText, ...props }: InputProps) => {
   const classname = isError ? 'input input_error' : 'input'
   return (
      <>
         <input className={classname} {...props} />
         {isError && helperText && <div className='input_helper_text'>{helperText}</div>}
      </>
   )
}


