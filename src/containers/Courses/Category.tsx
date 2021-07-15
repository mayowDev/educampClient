import React from 'react'
import {useHistory} from "react-router-dom";
import './category.scss'
const Category = (props) => {
    const history = useHistory()
    console.log('history', history)
    const params = history.location.pathname.split('/')
    const categoryName = params.pop()

    return (
        <div className="category">
          <h2>{categoryName&&categoryName} Category</h2>
      </div>
    )
}

export default Category
