import React, {useState, } from 'react'
import {Link, Redirect, useHistory} from 'react-router-dom';
import qs from 'querystring'
import Button from '../../../components/Button'
import { Heading, Paragraph } from '../../../components/Typography';
import Spinner from '../../../components/Spinner';
import Sidebar from '../../../components/Sidebar';

const Reset = (props) => {
    const {resetPassword, isLoading, isApiError, isResetPasswordSuccess, isLoggedIn} = props
    const [userPassword, setUserPassword] = useState({ password:'', confirmPassword:"" })
    const history = useHistory();
    isLoggedIn&& <Redirect to="/"/>
    
    const query = qs.parse(history.location.search)    
    const token = query["?token"]

    const isPasswordMatch = ({password, confirmPassword}) => {
        return password === confirmPassword;
    };

    const validPassword = () => {
        return isPasswordMatch(userPassword);
    };

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
            const result = await resetPassword(token,userPassword);
            console.log('reset.tsx Result', result)

        }
        catch(e) {
            console.log('resetErr',e.message);
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
            <form method="post" onSubmit={(e)=>handleReset(e)}>
            {
                isResetPasswordSuccess ?
                <>
                    <Paragraph className="success-message" value={`We've Successfully reset your password.  please login into your account with then new password.`} />
                    <Link to='/login' className="btn  btn-primary success-btn" type='primary'>Login</Link>
                </>
                :
                <>
                     <div className="form-group">
                        <label>Password</label>
                        <input name="password" onChange={handleInputChange} value={userPassword.password} type="password" className="form-control" placeholder="Enter New Password" id="password"/>
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input name="confirmPassword" onChange={handleInputChange} value={userPassword.confirmPassword} type="password" className="form-control" placeholder="Confrim Password" id="confirmPassword"/>
                    </div>
                    {
                        validPassword() && userPassword.password.length > 8 && (
                            <>
                            {/* <br /><br /> */}
                            <Button value='Reset Password' className="btn link-primary  btn-primary" type='primary'/> 
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

}

export default Reset
