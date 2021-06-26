export interface ITypeCheckout {
    isLoading?: boolean,
    success: () => void,
    getCartItems: () => void,
    cartItems: any,
    userProfile:any,
    // setConversation?: (val: boolean) => void,
}

