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
             await signup(user);
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
    return (
        <div className="signup">
            {/* <Sidebar/> */}
            <div className="signup__container">
            {isLoading  ?<Spinner />:
             <div className={`${isRegistered ? 'form-success': 'signup__form-block form-block'} `} >
                <div className="heading">
                    {/* <H2 className="title-head" value={isRegistered? "Email Sent !" : "Signup Now" }/> */}
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
                            <input name="name" onChange={handleInputChange} type="text" className="form-control" placeholder="Your Name" id="name"/>
                            </div>
                            <div className="form-group ">
                                <label htmlFor="email">email</label>
                                <input name="email" onChange={handleInputChange} type="email" className="form-control" placeholder="youremail@gmail.com" id="email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input name="password" onChange={handleInputChange} type="password" className="form-control" placeholder="Your Password" id="password"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Confirm Password</label>
                                <input name="confirmPassword" onChange={handleInputChange} type="password" className="form-control" placeholder="Confirm Password" id="confirmPassword"/>
                            </div>
                            <input onClick={onSignUpSubmit} type="submit" value="Sign Up" className="btn btn-block btn-primary"/>

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
