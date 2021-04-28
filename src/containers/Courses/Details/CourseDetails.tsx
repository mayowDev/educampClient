import React from 'react'
import Card from "../../../components/Card";
import {ICourseDetails} from './types'
const CourseDetails:React.FC<ICourseDetails> = (props) => {
    const {title, description, onClick, thumbnail} = props
    return (
        <div>
            course details pages
            <h1>{title}</h1>
            <Card imgSrc={thumbnail && thumbnail} 
                title={title}
                description={description}
                horizontal
                course
                onClick={onClick}
            />
        </div>
    )
}

export default CourseDetails
