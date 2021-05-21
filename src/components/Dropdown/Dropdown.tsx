import React from 'react'
import {Link} from 'react-router-dom'

const Dropdown:React.FunctionComponent = (props) => {
    console.log('dropwdownProps', props.children);
    // const childs = React.Children.toArray(props.children)
    // const button = childs.map(child => child.type.name == "Button")
    // if(button){
    //     console.log("button")
    // }
    return (
        <>
        <div className="dropdown" >
            <div  className="dropbtn">{props.children?props.children[0]:"Menu"}</div>
            <div className="dropdown-content">
                <Link to="/profile">My Profile</Link>
                <Link to="#">Settings</Link>
                <Link to="#">Help</Link>
                {props.children?props.children[1]:<Link to="#">Logout</Link>}
            </div>
        </div>

        </>
    )
}

export default Dropdown
