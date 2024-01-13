import { ReactElement } from "react"

export const NoticeText = ({text, children}: {
  text: string
  children?: ReactElement
}) => {
  return (
    <p style={{color: '#979797'}}>{text} {children}</p>
  )
}