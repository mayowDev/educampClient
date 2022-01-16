import React,{Fragment} from 'react'
import { Link } from "react-router-dom";
import './style.scss'
const NoFound = () => {
    return (
        <Fragment>
            <div className="wrapper">
                <div className="wrapper__inner">
                    <div className="container">
                        <div className="error-page">
                            <h3>Ooopps :(</h3>
                            <h2 className="error-title">404</h2>
                            <h5>The page your request Doesn't exist.</h5>
                            <p>The page you are looking for might have been removed/changed or is temporarily unavailable.</p>
                            <Link to="/"  className="btn btn-block">Go Back To Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default NoFound