import React from 'react'
import {Link} from 'react-router-dom'
const Dropdown = (props) => {
    // const childs = React.Children.toArray(props.children)
    // console.log("childs")
    return (
        <>
        <div className="dropdown" >
            <div  className="dropbtn">{props.icon?props.icon:"DropDown"}</div>
            {/* <div  className="dropbtn">{props.children?props.children[0]:"DropDown"}</div> */}
            <div className="dropdown-content">
                {props.children?props.children: (
                    <>
                     <Link to="/profile">My Profile</Link>
                     <Link to="#">Link 2</Link>
                     <Link to="#">Link 3</Link>
                    </>
                )}
            </div>
        </div>

        </>
    )
}

export default Dropdown
