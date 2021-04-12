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
export interface IResponseType{
    pagination:IPaginationType,
    data:Array<Object>,
    count:number
}

export  interface ICourseFetchInitType{
    title?:string,
    minimumSkill?: string,
    limit?:number,
    page?:number
}