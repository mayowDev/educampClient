import React from 'react'

const Rating = (props) => {
    return (
        <div className="course-rating">
            <h5>4.1</h5>
            <span className="fa fa-star checked"/>
            <span className="fa fa-star checked"/>
            <span className="fa fa-star checked"/>
            <span className="fa fa-star checked"/>
            <span className="fa fa-star"/>
            {/* <span className="count">(94,974 ratings) 254,953 students</span> */}
            <span className="count">(94,974 ratings)</span>
        </div>
    )
}

export default Rating
