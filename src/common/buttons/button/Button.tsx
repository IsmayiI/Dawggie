import './Button.css'
import { HTMLProps } from "react"

interface ButtonProps extends HTMLProps<HTMLButtonElement> { }

export const Button = ({ children }: ButtonProps) => {
   return (
      <button>{children}</button>
   )
}

