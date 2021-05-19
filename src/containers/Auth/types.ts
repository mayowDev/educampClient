export interface ITypeSignUp {
    name: string;
    email: string,
    password: string,
    role: string
}

export interface ITypeLoginData {
    email: string;
    password: string;
//     profile: any,
//     setConversation?: (val: boolean) => void,
//     isConversation?: string,
}

export interface ITypeRenderRoute {
    isLoggedIn?: boolean,
    redirectPath?: boolean
}
