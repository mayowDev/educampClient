export interface ITypeCheckout {
    isLoading?: boolean,
    success: () => void,
    getCartItems: () => void,
    cartItems: any,
    // setConversation?: (val: boolean) => void,
}

