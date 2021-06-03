export interface ITypeGlobal {
    isLoggedIn?: boolean,
    redirectPath?: string,
    updateProfileData?: () => void,
    fetchSendBirdInit?: (val: any) => void,
    profile: any,
    profile_?: any,
    setConversation?: (val: boolean) => void,
    isConversation?: string,
    isFirstLoad?:boolean,
}

export interface ITypeRenderRoute {
    isLoggedIn?: boolean,
    redirectPath?: boolean
}
