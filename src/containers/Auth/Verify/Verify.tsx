import React, { useEffect} from 'react'
import {Link, useHistory, Redirect} from 'react-router-dom'
import qs from 'querystring'
import Logo from '../../../assets/images/Logo-small.png';
import { Heading, Paragraph } from '../../../components/Typography';
import {IVerifyProps} from '../types'
import Spinner from '../../../components/Spinner';

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
            <div className="verify__sidebar"><Link to="/"><img src={Logo} alt="geekcamp-logo"/></Link></div>
            {isLoading && !isApiError ?<Spinner />:
                <div className="verify__container">
                    <div className="content">
                        <Heading className="title-head" value={isVerified ? "Succesfully Verified !" : "Verification Faild" }/>
                        <Paragraph className="success-message" 
                        value={isVerified?`Your Account was verified successfully!, Please login to your account`:'Sorry your account verification failed'}
                        />
                        <Link  to={isVerified?'/login':"/"} className="btn  btn-primary link-primary" type='primary'>{isVerified? "Login":"Go Home"}</Link>
                    </div>	                             
                </div>
             }
        </div>
       
    )
}

export default Verify
