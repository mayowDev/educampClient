import React, {useState, useEffect} from 'react'
import {Redirect, Link, useHistory} from 'react-router-dom'
// import Logo from '../../../assets/images/Logo-small.png';
import Google from '../../../assets/images/icon-google.png';
import Button from '../../../components/Button'
import { Paragraph, H2 } from '../../../components/Typography';
import Spinner from '../../../components/Spinner';
import Sidebar from '../../../components/Sidebar';

import {ISignUpProps, ITypeSignUp} from '../types'

const Signup = ({signup, resetPage, isLoading, isRegistered, isLoggedIn, registerWithGoogle, registerWithFacebook}:ISignUpProps) => {
    if(isLoggedIn) return <Redirect to="/" />;
    const [visible, setVisible] = useState(false);
    const [user, setUser] = useState<ITypeSignUp>({name: '', email:'', password:'', confirmPassword:'', role:'student'})
    const history = useHistory()

    useEffect(() => {
        setUser({name: '', email:'', password:'', confirmPassword:'', role:'student'});
        resetPage()
    },[])

    const handleGoHome = () => {
          history.replace("/");
      }; 

    const handleInputChange = (e)=>{
        setUser({
          ...user,
          [e.target.name]: e.target.value
        });
    }
    const onSignUpSubmit =  async e => {
        e.preventDefault();
        try {
            if(!allInputsAreValid()){return setUser({name: ' ', email:' ', password:' ', confirmPassword:' ', role:'student'})}
             signup(user);
             setUser({name: '', email:'', password:'', confirmPassword:'', role:'student'});
        }
        catch(e) {
            console.log('signupError',e.message);
            setUser({name: '', email:'', password:'', confirmPassword:'', role:'student'});
        }
    }
    const handleSignupWithGoogle =(e)=>{
        try {
            e.preventDefault();
            registerWithGoogle();
        } catch (error) {
            console.log(error);
        }
    }
    const handleSignupWithFacebook =(e)=>{
        try {
            e.preventDefault();
            registerWithFacebook();
        } catch (error) {
            console.log(error);
        }
    }
    const isPasswordValid = (pass) => {
        return pass.length > 7 && /^(?=.*\d)(?=.*[()@!#$%&]).{8,}$/i.test(pass)
    };
    const isEmailValid = (mail) => {
        return /^\S+@\S+\.\S+$/.test(mail) === true;
    };
    const validPassword = () => {
        return isPasswordValid(user.password);
    };
    const confirmPasswordValid = () => {
        return isPasswordValid(user.confirmPassword) && user.password === user.confirmPassword;
    };
    const validEmail = () => {
        return isEmailValid(user.email);
    };
    const allInputsAreValid = () => {
        return validEmail() && validPassword() && confirmPasswordValid()
    }
    return (
        <div className="signup">
            <div className="signup__container">
            {isLoading  ?<Spinner />:
             <div className={`${isRegistered ? 'form-success': 'signup__form-block form-block'} `} >
                <div className="heading">
                    <h2 className="title-head">{isRegistered? "Email Sent !" : "Signup Now" }</h2>
                    {!isRegistered&&
                    <>
                            <p>Have an Account? <Link to="/login">Login here</Link></p> 
                            {/* <p>Lost your activation link? <Link to="/resend-email">Request new one</Link></p>                            */}
                    </>
                    }
                    {isRegistered&&
                            <p>Lost your activation link? <Link to="/resend-email">Request new one</Link></p>                           
                    }
                </div>	
                <form>
                    {
                        isRegistered ?
                        <>
                            <Paragraph className="success-message" value={`Please activate your account by following the link we've sent to your Email, it's valid in next 12 hrs.`} />
                            <Button onClick={handleGoHome} value="Go Home" className="link-primary"/>
                        </>
                        :
                        <>
                            <div className="form-group ">
                            <label htmlFor="name">name</label>
                            <input name="name" type="text" placeholder="Your Name" id="name"
                            className={`form-control ${!validEmail()&&user.name.length > 0 &&user.name.trim().length < 2?'input-error':''}`}
                            onChange={handleInputChange}
                            />
                            {user.name.length > 0 &&user.name.trim().length < 2&&
                                <span className="error-message">{'name must be minimum 2 characters'}</span>
                            }
                            </div>
                            <div className="form-group ">
                                <label htmlFor="email">email</label>
                                <input  name="email" onChange={handleInputChange} value={user.email} type="email" placeholder="your@email.com" id="email"
                                    className={`form-control ${!validEmail()&&user.email.length > 0?'input-error':''}`}
                                />
                            {!validEmail()&& user.email.length > 0&&<span className="error-message">{'Please provide a valid email address '}</span>}
                            </div>
                            <div className="hide-show form-group">
                                <div className="checkbox-group">
                                    <label htmlFor="password">Password</label>
                                    <span onClick={()=>setVisible(!visible)} className="caption">{visible?'Hide':'Show'}</span>
                                </div>
                                <div className="password-group">
                                    <input autoComplete="none" 
                                        name="password"   
                                        onChange={handleInputChange} 
                                        value={user.password} type={visible?"text":"password"} 
                                        className={`form-control ${!validPassword()?'input-error':''}`} 
                                        placeholder="Your Password" id="password"
                                    />
                                    {!validPassword()&& user.password.length > 0&&
                                        <span className="error-message">{'password must be 8 characters, 1 of (@!#$%&), 1 uppercase and lowercase'}</span>
                                    }
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Confirm Password</label>
                                <input name="confirmPassword" placeholder="Confirm Password" id="confirmPassword" type={visible?"text":"password"} 
                                    className={`form-control ${!confirmPasswordValid()&& user.confirmPassword.length > 0?'input-error':''}`} 
                                    onChange={handleInputChange}
                                    value={user.confirmPassword}
                                />
                                {!confirmPasswordValid() && user.confirmPassword.length > 0&&
                                    <span className="error-message">{'confirm password should match password'}</span>
                                }
                            </div>
                            <input onClick={onSignUpSubmit} type="submit" value="Sign Up" className={`btn-block btn-primary ${!allInputsAreValid()&&'disabled'}`}/>
                            <span className="seprater">OR</span>    
                            <div className="icons">
                                <input type="button" value="Signup with facebook" onClick={handleSignupWithFacebook} className="btn btn-block auth-btn fb"/>
                                <input type="button" value="Signup with Google" onClick={handleSignupWithGoogle} className="btn btn-block auth-btn gl"/>
                            </div>
                        </>
                    }
                    
                </form>
             </div>
            }
               
            </div>
        </div>
    )
}

export default Signup
