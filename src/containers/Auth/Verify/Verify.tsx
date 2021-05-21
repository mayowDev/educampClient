import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import qs from 'querystring'
import Logo from '../../../assets/images/Logo-small.png';
import { Heading, Paragraph } from '../../../components/Typography';
import {IVerifyProps} from '../types'

const Verify = (props:IVerifyProps) => {
    const {verify} = props
    const [isVerified, setVerified] = useState<boolean>(false);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [token, setToken] = useState<string>('');
    const history = useHistory()
    // const url ='struct token from urls with querystring'
    // const validEmail = () => {
    //     return isTokenValid(token);
    // };
    // - query string params are in props.location.search
    const query = qs.parse(history.location.search)
    console.log('query', query)
    // const handleVerify = async (e) => {
    //     e.preventDefault();
    //     try {
    //         setLoading(true)
    //         setError(!error);
    //         const result = await verify({token});
    //         if(result.payload.success) {
    //             setVerified(true)
    //             setLoading(false)
    //         }
    //         else{
    //             setLoading(false)
    //         }
    //     }
    //     catch(e) {
    //         console.log(e.message);
    //         setVerified(false)
    //     }
    // };
    return (
        <div className="verify">
            <div className="verify__sidebar"><Link to="/"><img src={Logo} alt="geekcamp-logo"/></Link></div>
            <div className="verify-container">
                <div className="heading">
                    <Heading className="title-head" value={isVerified ? "Succesfully Verified !" : "Verification Faild" }/>
                    <Paragraph className="success-message" value={isVerified?`Your Account was verified successfully !`:'Sorry your account verification failed'} />
                    <Link to='/' className="btn  btn-primary success-btn" type='primary'>Go Home</Link>
                </div>	                             
            </div>
        </div>
    )
}

export default Verify
