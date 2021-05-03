export interface IBootcampDetails{
    id:number,
    name?: string, 
    slug?: string,
    description?: string,
    email?: string, 
    website?: string, 
    address?: string,  
    careers?: Array<string>, 
    photo?: string,
    location?: string,
    onClick?: () => void,
    onHide?: () => void
    // isConversation?: boolean,
}