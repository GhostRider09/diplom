import { ReactElement } from "react"

export const ErrorText = ({text, children}: {
  text: string
  children?: ReactElement
}) => {
  return (
    <p style={{color: '#f00'}}>{text} {children}</p>
  )
}