import { TypeLoginForm, TypeRegisterForm } from "./auth";

export interface TypePropsFormLogin {
    contentHeader: string;
    contentButtonForm: string;
    contentSideBar: string;
    contentButtonToogle: string;
    contentHeaderToogle: string;
    contentToogle: string;
    handleChange: () => void;
    // handleFinish: (values: TypeLoginForm | TypeRegisterForm) => void;
}