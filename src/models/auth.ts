export interface TypeLoginForm {
  user_name: string;
  password: string;
}

export interface TypeRegisterForm extends TypeLoginForm {
  rePassword?: string;
}

export interface User {
  id: number;
  name: string;
}
