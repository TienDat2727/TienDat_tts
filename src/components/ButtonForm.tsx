import React from 'react'
import { Button } from 'antd'

type ButtonProps = {
    content: string
    onClick?: () => void
}

const ButtonForm = ({content, onClick} : ButtonProps) => {
  return (
    <Button onClick={onClick}>{content}</Button>
  )
}

export default ButtonForm