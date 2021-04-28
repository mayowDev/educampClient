interface IPaginationType {
    totalPages: Number,
    currentPage: Number,
    next: {
        page: Number
    },
    prev: {
        page: Number
    }
    
}
enum Careers{ "Web Development", "Mobile Development", "DevOps", "UI/UX", "Data Science", "QA Manager"}

export interface IResponseType{
    pagination:IPaginationType,
    data:Array<Object>,
    count:number
}

export  interface IBootcampFetchInitType{
    name?:string,
    limit?:number,
    page?:number,
    careers?:Careers
}

export interface IBootcampQuery{
    name?: string,
    page?: number,
    size?: number,
    limit?: number,
}
