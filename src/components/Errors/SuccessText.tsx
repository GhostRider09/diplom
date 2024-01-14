import { ReactElement } from "react"

export const SuccessText = ({text, children}: {
  text: string
  children?: ReactElement
}) => {
  return (
    <p style={{color: '#6b9d6b', textAlign: 'center'}}>{text} {children}</p>
  )
}