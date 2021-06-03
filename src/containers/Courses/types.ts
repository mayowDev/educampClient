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

export  interface ICourseFetchType{
    title?:string,
    minimumSkill?: string,
    limit?:number,
    page?:number
}

export interface ICourseDetails{
    id?: string,
    title?: string,
    description?:string,
    weeks?: string, 
    price?:number,
    minimumskill?:SkillLevel,
    scholarshipavailable?:boolean,
    coursecontent?:string[],
    userid?: string,
    published?: boolean,
    thumbnail?:string,
    onClick?:()=>void
}

enum SkillLevel{ "beginner", "intermediate", "advanced"}