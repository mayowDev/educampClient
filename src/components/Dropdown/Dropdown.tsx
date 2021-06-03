import React from 'react'
import {Link} from 'react-router-dom'
const Dropdown = (props) => {
    // const childs = React.Children.toArray(props.children)
    return (
        <>
        <div className="dropdown" >
            <div  className={`dropdown__dropbtn dropdown__dropbtn-${props.type&&props.type}`}>{props.icon?props.icon:"DropDown"}</div>
            <div className={`dropdown__content dropdown__content-${props.type&&props.type}`}>
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
