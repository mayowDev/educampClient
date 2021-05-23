import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import Logo from '../../../assets/images/Logo-small.png';
import Button from '../../../components/Button'
import { Heading, Paragraph } from '../../../components/Typography';
import Spinner from '../../../components/Spinner';

const Reset = (props) => {
    const {resetPassword} = props
    const [password, setPassword] = useState<string>('')
    const [userPassword, setUserPassword] = useState({ password:'', confirmPassword:"" })
    const [matchPassword, setMatchPassword] = useState(false)
    const [isSuccess, setSuccess] = useState<boolean>(false);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    // const history = useHistory()

    const isPasswordMatch = ({password, confirmPassword}) => {
        return password === confirmPassword;
    };

    const validPassword = () => {
        return isPasswordMatch(userPassword);
    };

    // const handleGoBack = () => {
    //     history.goBack();
    // };
    const handleInputChange = (e)=>{
        setUserPassword({
            ...userPassword,
            [e.target.name]: e.target.value
          });
        setPassword(e.currentTarget.value);
    }
    const handleReset = async (e) => {
        e.preventDefault();
        // alert(userPassword.password)
        try {
            setLoading(true)
            setError(!error);
            const result = await resetPassword(userPassword);
            console.log('resetResult', result)
            if(result.payload.success) {
                setSuccess(true)
                setLoading(false)
                //logout(user)
            }
            else{
                setLoading(false)
            }
        }
        catch(e) {
            console.log(e.message);
            setSuccess(false)
        }
    };
    return <div className="forgot">
    <div className="forgot__sidebar"><Link to="/"><img src={Logo} alt="geekcamp-logo"/></Link></div>
    <div className="forgot__form-container">
        {isLoading && !error?<Spinner />:
            <div className="forgot__form-block">
            <div className="heading">
                <Heading className="title-head" value={isSuccess? "Your Password Was Updated Succesfully !" : "Reset Your Password" }/>
                {!isSuccess&&
                    <p>Login Your Account <Link to="/login">Click here</Link></p>                            
                }

            </div>	
            <form method="post" onSubmit={(e)=>handleReset(e)}>
            {
                isSuccess ?
                <>
                    <Paragraph className="success-message" value={`We've Successfully reset your password.  please login into your account with then new password.`} />
                    <Link to='/' className="btn  btn-primary success-btn" type='primary'>Go Home</Link>
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
                        validPassword() && (
                            <>
                            {/* <br /><br /> */}
                            <Button value='Reset Password' className="btn  btn-primary" type='primary'/> 
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
