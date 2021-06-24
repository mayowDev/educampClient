export interface ITypeSignUp {
    name: string;
    email: string,
    password: string,
    confirmPassword?:string,
    role: string
}

export interface ISignUpProps{
    isLoading:boolean,
    isRegistered:boolean,
    isLoggedIn:boolean,
    isApiError:boolean,
    resetPage:()=>void,
    registerWithGoogle:()=> void,
    registerWithFacebook:()=> void,
    signup:(user:object)=>{
        type: string,
        payload:{
            success:boolean,
            message:string,
            data?:string
        }
    }
}
export interface ITypeLogin {
    email: string;
    password: string;
}
export interface ITypeVerify {
    // id: number;
    token: string | undefined
    // expires: number,
    // signature: string
}
export interface IVerifyProps{
    isLoggedIn: boolean,
    isVerified: boolean,
    isLoading: boolean,
    isApiError:boolean
    verify:(token:string)=>{
        type: string,
        payload:{
            success:boolean,
            message:string,
            data?:string
        }
    }

}
export interface IForgotProps{
    isLoading:boolean,
    isApiError:boolean,
    isForgotPasswordSuccess:boolean,
    forgotPassword:(email:object)=>{
        type: string,
        payload:{
            success:boolean,
            message:string,
            data?:string
        }
    },
    forgotPasswordResponse:{
        type: string,
        payload:{
            success:boolean,
            message:string,
            data?:string
        }
    }
}
export interface IForgotPassword{
    email: string
}

export interface ITypeResetPassword{
    password: string,
    confirmPassword: string, //TODO: find a way to match this with newPassword

}
export interface ITypeUpdatePassword{
    oldPassword: string
    newPassword: string,
    confirmPassword: string, //TODO: find a way to match this with newPassword

}

export interface ITypeRenderRoute {
    isLoggedIn?: boolean,
    redirectPath?: boolean
}
