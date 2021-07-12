import React from 'react'
import {useHistory} from "react-router-dom";

const Category = (props) => {
    const history = useHistory()
    console.log('history', history)
    return (
        <div >
        <h2>Category</h2>
      </div>
    )
}

export default Category
