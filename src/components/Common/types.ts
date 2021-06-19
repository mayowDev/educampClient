var rest:{
    [x: string]: any;
}
export interface IProtectedRoute{
    rest?: typeof rest,
    path:string, 
    component: any, 
    render?: any, 
    exact:boolean,
    userProfile?: any, 
    isLoggedIn:boolean,
    isLoading:boolean,
}