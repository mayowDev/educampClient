export interface ICourseDetails{
    id: string,
    title: string,
    description:string,
    weeks: string, 
    price:number,
    minimumskill:SkillLevel,
    scholarshipavailable:boolean,
    coursecontent:string[],
    bootcampid: string,
    userid: string,
    published: boolean,
    thumbnail:string,
    onClick:()=>void
}

enum SkillLevel{ "beginner", "intermediate", "advanced"}