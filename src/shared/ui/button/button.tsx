import { FC, MouseEventHandler, ReactNode } from "react"

interface IButton {
  children: ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
}
const Button: FC<IButton> = ({ children, onClick }) => {
  return (
    <button className="" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
