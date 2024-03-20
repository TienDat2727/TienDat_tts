export interface TypeLoginForm {
    user_name: string;
    password: string;
}

export interface TypeRegisterForm extends TypeLoginForm {
    rePassword: string;
}
