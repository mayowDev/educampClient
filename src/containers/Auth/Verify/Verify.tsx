import React, { useEffect} from 'react'
import {Link, useHistory, Redirect} from 'react-router-dom'
import qs from 'querystring'
import { Heading, Paragraph } from '../../../components/Typography';
import {IVerifyProps} from '../types'
import Spinner from '../../../components/Spinner';
import Sidebar from '../../../components/Sidebar'
const Verify = (props:IVerifyProps) => {
    const {verify, isVerified, isApiError, isLoggedIn, isLoading} = props
    if(isLoggedIn) return <Redirect to="/" />;
    const history = useHistory()
    const query = qs.parse(history.location.search)
    const token = query["?token"]

    useEffect(() => {
        handleVerify()
    },[])

    const handleVerify = async () => {
        try {
            // @ts-ignore
            await verify(token);
        }
        catch(e) {
            console.log('verify.tsx err',e.message);
        }
    };
    return (
        <div className="verify">
            <Sidebar/>
            {isLoading && !isApiError ?<Spinner />:
                <div className="verify__container">
                    <div className="content">
                        <Heading className="title-head" value={isVerified ? "Succesfully Verified !" : "Verification Faild" }/>
                        <Paragraph className="success-message" 
                        value={isVerified?`Your Account was verified successfully!, Please login to your account`:'Sorry your account verification failed'}
                        />
                        <Link  to={isVerified?'/login':"/"} className="link-primary">{isVerified? "Login":"Go Home"}</Link>
                    </div>	                             
                </div>
             }
        </div>
       
    )
}

export default Verify
