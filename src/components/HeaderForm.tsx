import React from 'react'
import { Typography } from 'antd'

const {Title}  = Typography;

type HeaderProps = {
    content: string
}

const HeaderForm = ({content} : HeaderProps) => {
  return (
    <Title level={2}>{content}</Title>
  )
}

export default HeaderForm