export interface IHeaderProps {
    id?: number;
    name?: string;
    imageURL?: string;
    exhibitionType?: string;
    galleryName?: string;
    startedAt?: string;
    endedAt?: string;
    onClick?: (e:any) => void,
    isLoggedIn?: boolean,
    routeName?: string,
    changeSearch?: (e:any) => void | undefined,
    searchQuery?: string,
    profileData?: any;
    isHome?: boolean,
    isProfile?: boolean,
    isAuthenticationPage?: boolean,
    isSearchPage?: boolean,
    isLoginForgot?: boolean,
    loginPath?: string,
    mokeHeadersDelay?: boolean,
    setChat?: (e: boolean) => void,
    currentConversation?: any,
    isChat?: boolean,
    isSidebar?: boolean
    logout: () => LogoutResponse,
    getCartItems: ()=> LogoutResponse,
    addToCart?:()=> void,
    favouriteItems?:[{
        id:string,
        price:number
        title:string
    }]
    cartItems?: [{
        id:string,
        price:number
        title:string
    }]
}

export interface LogoutResponse {
    success : boolean, 
    message: string, 
    data?: object
    cart?:object
}

export interface IConversationIconProps {
    profileData: any,
    setAllConversations: (e) => void,
    handleConversation: (e) => void,
    conversationList: Array<any>,
    isInEvent?: boolean
    isLoggedIn?: boolean
}
