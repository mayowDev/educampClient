import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import Button from '../../../components/Button'
import { Heading, Paragraph } from '../../../components/Typography';
import Spinner from '../../../components/Spinner';
import Sidebar from '../../../components/Sidebar';

import {IForgotProps} from '../types'
const Forgot = (props:IForgotProps) => {
    const {forgotPassword, isLoading, isForgotPasswordSuccess} = props
    const [email, setEmail] = useState<string>('')

    const isEmailValid = (mail) => {
        return /^\S+@\S+\.\S+$/.test(mail) === true;
    };
    const validEmail = () => {
        return isEmailValid(email);
    };
    const handleInputChange = (e)=>{
        setEmail(e.target.value)
    }
    const handleReset = (e) => {
        e.preventDefault();
        if(!validEmail()){return setEmail('  ')}
        try {
            forgotPassword({email});
        }
        catch(e) {
            console.log(e.message);
        }
    };

    return (
        <div className="forgot">
            <Sidebar/>
            <div className="forgot__form-container">
                {isLoading?<Spinner />:
                    <div className="forgot__form-block">
                    <div className="heading">
                        <Heading className="title-head" value={isForgotPasswordSuccess? "Email Sent !" : "Forget Password" }/>
                        {!isForgotPasswordSuccess&&
                            <p>Login Your Account <Link to="/login">Click here</Link></p>                            
                        }

                    </div>	
                    <form method="post" onSubmit={(e)=>handleReset(e)} noValidate>  
                    {
                        isForgotPasswordSuccess ?
                        <>
                            <Paragraph className="success-message" value={`We've sent you a reset link with instructions to reset your password.  it's valid in the next 10 mins.`} />
                            <Link to='/' className="btn  link-primary success-btn" type='primary'>Go Home</Link>
                        </>
                        :
                        <>
                             <div className="form-group">
                                <label>Email</label>
                                <input  name="email" onChange={handleInputChange} value={email} type="email" className={`form-control ${!validEmail()?'input-error':''}`} placeholder="Enter Your Email" id="email"/>
                                {!validEmail()&& email.length > 0&&<span className="error-message">{'Please provide a valid email '}</span>}
                            </div>
                            <br /><br />
                            <Button  value='Send Email' className={`btn link-primary btn-primary ${!validEmail()&&'disabled'}`} type='primary'/> 
                        </>
                    }     
                    </form>
            </div>
                

                }
                
            </div>
        </div>
    )
}

export default Forgot
