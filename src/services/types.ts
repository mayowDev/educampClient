/** userservice Types */
export interface ITypeSignUpData{
    name: string;
    email: string;
    password: string;
    role: string;
}
export interface ITypeLoginData {
    email: string;
    password: string;
}

/** bootcampservice Types */
export interface IBootcampQuery{
    name?: string,
    page?: number,
    size?: number,
    limit?: number,
}
export interface ICreateBootcamp{
    name: string,          
    description: string,
    slug?: string,
    website: string,
    email: string,
    address: string,
    phone:number,
    careers:Careers[],
    photo?: string,
    housing?:boolean,
    jobassistance?:boolean,
    jobguarantee?:boolean ,
    acceptgi?:boolean,
    userid: string  
}

enum Careers{ "Web Development", "Mobile Development", "DevOps", "UI/UX", "Data Science", "QA Manager"}