import React, { useEffect, useState } from 'react';
import FormReusable from '../components/FormResauble';
import { fieldValuesInputSignIn } from '../constant';
import SidebarLogin from '../components/SidebarLogin';
import { TypeLoginForm, TypePropsFormLogin, TypeRegisterForm } from '../models';
import { useAppDispatch } from 'redux/hooks';
import { authAction } from 'redux/auth/authSlice';

const FormLogin = () => {
  const [typeForm, setTypeForm] = useState<'login' | 'register'>('login');
  const [contentProps, setContentProps] = useState<
    TypePropsFormLogin | undefined
  >();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setContentProps(getDefaultContentProps(typeForm));
  }, [typeForm]);

  const getDefaultContentProps = (
    typeForm: 'login' | 'register'
  ): TypePropsFormLogin | undefined => {
    if (typeForm === 'login') {
      return {
        contentHeader: 'Sign In',
        contentButtonForm: 'Sign In',
        contentSideBar: 'or use your email password',
        contentButtonToogle: 'Sign up',
        contentHeaderToogle: 'Hello, Friends!',
        contentToogle: 'Enter your Personal details to use all of site feature',
        handleChange: () => handleChangeForm('login'),
        handleFinish: (values: TypeLoginForm) => handleLoginClick(values),
      };
    } else if (typeForm === 'register') {
      return {
        contentHeader: 'Register',
        contentButtonForm: 'Register now',
        contentSideBar: 'or use your email password',
        contentButtonToogle: 'Register',
        contentHeaderToogle: 'Welcome, to Rikkeisoft',
        contentToogle: 'Thank you, for much',
        handleChange: () => handleChangeForm('register'),
        handleFinish: (values: TypeRegisterForm) => handleRegisterClick(values),
      };
    }
    return undefined;
  };

  const handleChangeForm = (typeForm: 'login' | 'register'): void => {
    setTypeForm(typeForm);
  };

  const handleLoginClick = (values: TypeLoginForm) => {
    // TODO: Get username + pwd from login form
    dispatch(authAction.login(values));
  };

  const handleRegisterClick = (values: TypeRegisterForm) => {
    dispatch(authAction.register(values));
  };

  return <></>;
};

export default FormLogin;
