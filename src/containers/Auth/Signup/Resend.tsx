import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import Button from '../../../components/Button'
import { Heading, Paragraph } from '../../../components/Typography';
import Spinner from '../../../components/Spinner';
import Sidebar from '../../../components/Sidebar'
const Resend = (props) => {
    const {reseendVerificationEmail, isLoading, isResendEmailSuccess} = props
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
    console.log('isResendEmailSuccess', isResendEmailSuccess, 'isloading', isLoading)
    const handleResendVerification = async (e) => {
        e.preventDefault();
        try {
            const result = await reseendVerificationEmail({email});
            console.log('resend.tsx result', result);
        }
        catch(e) {
            console.log(e.message);
        }
    };
    return (
        <div className="resend shared-form">
            <Sidebar/>
            <div className="shared-form__container">
                {isLoading?<Spinner />:
                    <div className={`${isResendEmailSuccess?'form-success': ' form-block resend__form-block'} `} >
                    <div className="heading">
                        <Heading className="title-head" value={isResendEmailSuccess? "Email Sent !" : "Resend verification email" }/>
                        {!isResendEmailSuccess&&
                            <p>Login Your Account <Link to="/login">Click here</Link></p>                            
                        }

                    </div>	
                    <form method="post" onSubmit={(e)=>handleResendVerification(e)}>
                    {
                        isResendEmailSuccess ?
                        <>
                            <Paragraph className="success-message" value={`We've sent  you a new  Verification link to your email.  it's valid in the next 12 hrs.`} />
                            <Link to='/' className="btn  link-primary success-btn" type='primary'>Go Home</Link>
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
                                    <Button value='Send Email' className="link-primary btn-primary" type='primary'/> 
                                    </>
                                )
                            }
                        
                        </>
                    }     
                    </form>
            </div>
                

                }
                
            </div>
        </div>
    )
}

export default Resend
