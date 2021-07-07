import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import SearchResult from '../SearchResult'

const SearchInput = (props) => {
    const [isRequestCanceled, setIsRequestCanceled]= useState<boolean>(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResponse, setSearchResponse] = useState<any>('')
    const { searchCourse} = props

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    }
    useEffect(() => {
        const fetchCourses = async ()=> {
            let response = await searchCourse(searchTerm.trim())
            setSearchResponse(response&&response.payload)
        }
        if(searchTerm&&searchTerm.trim().length > 2  && isRequestCanceled == false){
            const delayDebounceFn = setTimeout(() => {
                fetchCourses()
              }, 1000)
              return () => clearTimeout(delayDebounceFn)
        }
    },[searchTerm&&searchTerm.trim().length])
   
    return (
        <>
        <input 
            autoFocus
            type='text'
            autoComplete='off'                  
            onKeyDown={({ nativeEvent }) => {nativeEvent.key === 'Backspace' ? setIsRequestCanceled(true) : setIsRequestCanceled(false) }}
            onChange={handleSearchChange} value={searchTerm} placeholder="What do you want to learn?" 
        />
        {searchResponse&&searchResponse.length>0&&
            <div className="courses__hero--search-result">
                {searchResponse&&searchResponse.length>0&&searchResponse.map((({title, slug}, idx)=>{
                    //https://www.udemy.com/courses/search/?q=react&src=sac&kw=react
                    return(
                        <SearchResult url={`courses/${slug}`} title={title} id={idx}/>
                    )
                }))
                }
            </div>
        }    
        </>
    )
}

export default SearchInput
