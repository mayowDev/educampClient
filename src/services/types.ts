/** userservice Types */
export interface ITypeSignUpData{
    name: string;
    email: string;
    password: string;
    role: string;
}

export interface ITypeVerify {
    // id: number;
    token: string,
    // expires: number,
    // signature: string
}

export interface ITypeLoginData {
    email: string;
    password: string;
}

export interface IForgotPassword{
    email: string
}

// enum Careers{ "Web Development", "Mobile Development", "DevOps", "UI/UX", "Data Science", "QA Manager"}