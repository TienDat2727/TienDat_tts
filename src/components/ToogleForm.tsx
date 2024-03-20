import React, { useState } from 'react'
import HeaderForm from './HeaderForm';
import { Typography } from 'antd';
import ButtonForm from './ButtonForm';


const {Text} = Typography;

interface ToogleFormProps {
    strHeader: string;
    strButton: string;
    content: string;
    handleChange: () => void;
}

const ToogleForm = ({strHeader, strButton, content, handleChange} : ToogleFormProps) => {
    const [isLogin, setIsLogin] = useState(true);
    const handleChangeLogin = () => {
        setIsLogin(!isLogin);
        handleChange();
    }
  return (
    <div className={`toogle-panel ${isLogin ? 'toogle-left' : 'toogle-right'}`}>
        <HeaderForm content={strHeader}/>
        <Text> {content} </Text>
        <ButtonForm content={strButton} onClick={handleChangeLogin}/>
    </div>
  )
}

export default ToogleForm