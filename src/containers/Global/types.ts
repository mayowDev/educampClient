export interface ITypeGlobal {
    isLoggedIn?: boolean,
    redirectPath?: string,
    updateProfileData?: () => void,
    fetchSendBirdInit?: (val: any) => void,
    profile: any,
    profile_?: any,
    setConversation?: (val: boolean) => void,
    isConversation?: string,
}

export interface ITypeRenderRoute {
    isLoggedIn?: boolean,
    redirectPath?: boolean
}
