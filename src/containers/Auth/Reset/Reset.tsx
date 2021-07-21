import React, {useState, } from 'react'
import {Link, Redirect, useHistory} from 'react-router-dom';
import qs from 'querystring';
import {toast} from 'react-toastify'
import Button from '../../../components/Button'
import { Heading, Paragraph } from '../../../components/Typography';
import Spinner from '../../../components/Spinner';
import Sidebar from '../../../components/Sidebar';

const Reset = (props) => {
    const {resetPassword, isLoading, isResetPasswordSuccess, isLoggedIn} = props
    const history = useHistory();
    const [userPassword, setUserPassword] = useState({ password:'', confirmPassword:"" })
    const [visible, setVisible] = useState(false);
    const query = qs.parse(history.location.search)  
    const token = query["?token"]
    if(isLoggedIn || !token) return <Redirect to="/" />;
    
    const isPasswordValid = (pass) => {
        return pass.length > 7 && /^(?=.*\d)(?=.*[()@!#$%&]).{8,}$/i.test(pass)
    };
    const validPassword = () => {
        return isPasswordValid(userPassword.password);
    };
    const confirmPasswordValid = () => {
        return isPasswordValid(userPassword.confirmPassword) && userPassword.password === userPassword.confirmPassword;
    };
   
    const allInputsAreValid = () => {
        return  validPassword() && confirmPasswordValid()
    }
    const handleInputChange = (e)=>{
        e.preventDefault();
        setUserPassword({
            ...userPassword,
            [e.target.name]: e.target.value
          });
    }
    const handleReset = async (e) => {
        e.preventDefault();
        try {
            if(!allInputsAreValid()){return setUserPassword({password:" ", confirmPassword: " "})}
            await resetPassword(token,userPassword);
            setUserPassword({password:"", confirmPassword: ""})
        }
        catch(e) {
            console.log('reset.tsx Error', e.message);
        }
    };
    return <div className="reset">
        <Sidebar/>
    <div className="reset__form-container">
        {isLoading? <Spinner />:
            <div className="reset__form-block">
            <div className="heading">
                <Heading className="title-head" value={isResetPasswordSuccess? "Password Updated Succesfully !" : "Reset Your Password" }/>
                {!isResetPasswordSuccess&&
                    <p>Re-send reset email <Link to="/forgot-password"> Click here</Link></p>                            
                }

            </div>	
            <form className="reset-form" method="post" onSubmit={(e)=>handleReset(e)}>
            {
                isResetPasswordSuccess ?
                <>
                    <Paragraph className="success-message" value={`We've Successfully reset your password.  please login into your account with then new password.`} />
                    <Link to='/login' className="btn  btn-primary success-btn" type='primary'>Login</Link>
                </>
                :
                <>
                    <div className="hide-show form-group">
                        <div className="checkbox-group">
                            <label htmlFor="password">Password</label>
                            <span onClick={()=>setVisible(!visible)} className="caption">{visible?'Hide':'Show'}</span>
                        </div>
                        <div className="password-group">
                            <input autoComplete="none" 
                                name="password"   
                                onChange={handleInputChange} 
                                value={userPassword.password} type={visible?"text":"password"} 
                                className={`form-control ${!validPassword()?'input-error':''}`} 
                                placeholder="Your Password" id="password"
                            />
                            {!validPassword()&& userPassword.password.length > 0&&
                                <span className="error-message">{'password must be 8 characters, 1 of (@!#$%&), 1 uppercase and lowercase'}</span>
                            }
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input name="confirmPassword" placeholder="Confirm Password" id="confirmPassword" type={visible?"text":"password"} 
                            className={`form-control ${!confirmPasswordValid()&& userPassword.confirmPassword.length > 0?'input-error':''}`} 
                            onChange={handleInputChange}
                            value={userPassword.confirmPassword}
                        />
                        {!confirmPasswordValid() && userPassword.confirmPassword.length > 0&&
                            <span className="error-message">{'confirm password should match password'}</span>
                        }
                    </div>
                    {
                        // allInputsAreValid() && userPassword.confirmPassword.length > 8 && (
                            <>
                            {/* <br /><br /> */}
                            <Button value='Reset Password' className={`btn btn-primary  link-primary ${!allInputsAreValid()&&'disabled'}`} type='primary'/> 
                            </>
                        // )
                    }
                
                </>
            }     
            </form>
    </div>
        }
    </div>
</div>

}

export default Reset
