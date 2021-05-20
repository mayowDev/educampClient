import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import Logo from '../../../assets/images/Logo-small.png';
import Button from '../../../components/Button'
import { Heading, Paragraph } from '../../../components/Typography';

import {IForgotProps} from '../types'
const Forgot = (props:IForgotProps) => {
    const {forgotPassword, forgotPasswordResponse, loading} = props
    const [email, setEmail] = useState<string>('')
    const [isSuccess, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('')
    const history = useHistory()

    const isEmailValid = (mail) => {
        return /^\S+@\S+\.\S+$/.test(mail) === true;
    };

    const validEmail = () => {
        return isEmailValid(email);
    };

    const handleGoBack = () => {
        history.goBack();
    };

    const handleInputChange = (e)=>{
        // e.preventDefault();
        setEmail(e.target.value)
    }
    const handleReset = async (e) => {
        e.preventDefault();
        try {
            const result = await forgotPassword({email});
            if(result.payload.success) {
                setSuccess(true)
                setMessage(result.payload.message)
            }
            else{
                setError(true);
            }
        }
        catch(e) {
            console.log(e.message);
            setSuccess(false)
        }
    };
    return (
        <div className="forgot">
            <div className="forgot__sidebar"><Link to="/"><img src={Logo} alt="geekcamp-logo"/></Link></div>
            <div className="forgot__form-container">
                <div className="forgot__form-block">
                        <div className="heading">
                            {isSuccess?
                                <h2 className="title-head">Email Was <span>Sent !</span></h2> :
                                <h2 className="title-head">Forget <span>Password</span></h2>
                            }
                            {!isSuccess&&
                                <p>Login Your Account <Link to="/login">Click here</Link></p>                            
                            }

                        </div>	
                        <form method="post" onSubmit={(e)=>handleReset(e)}>
                        {
                            isSuccess ?
                            <>
                                <Paragraph className="success-message" value={`We've sent a reset link with instructions to reset your password.  it's valid in the next 10 mins.`} />
                                <Link to='/' className="btn  btn-primary success-btn" type='primary'>Go Home</Link>
                            </>
                            :
                            <>
                                 <div className="form-group">
                                    <label>Email</label>
                                    <input name="email" onChange={handleInputChange} value={email} type="email" className="form-control" placeholder="Enter Your Email address" id="email"/>
                                </div>
                                {
                                    validEmail() && (
                                        <>
                                        <br /><br />
                                        <Button value='Send Email' className="btn  btn-primary" type='primary'/> 
                                        </>
                                    )
                                }
                            
                            </>
                        }
                           
                        </form>
                </div>
            </div>
        </div>
    )
}

export default Forgot
