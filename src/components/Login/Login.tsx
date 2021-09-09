import React, {useState} from 'react'
import {Redirect, Link} from 'react-router-dom';

const Login = (props) => {
    const {isLoggedIn, onLoginWithGoogle, onLoginWithFacebook, onLogin, title, subtitle, subtitleLinkTo} = props
    const [user, setUser] = useState({ email:'', password:''})
    const [remember, setRemember] = useState(false)
    const [visible, setVisible] = useState(false);
    const [isRandomPasswordRequested,setIsRandomPasswordRequested] = useState(false)
    const handleInputChange = (e)=>{
        setUser({
          ...user,
          [e.target.name]: e.target.value
        });
    }
   
    const onLoginSubmit = e => {
        e.preventDefault();
        try {
            if(!allInputsAreValid()){return setUser({ email:' ', password:' '})}
            onLogin(user)  
        } catch (error) {
            console.log(error);
        }    
    }
    const isPasswordValid = (pass:string) => {
        return pass.length > 7 && /^(?=.*\d)(?=.*[()@!#$%&]).{8,}$/i.test(pass)
    };
    const isEmailValid = (mail) => {
        return /^\S+@\S+\.\S+$/.test(mail) === true;
    };

    const isValidPassword = () => {
        return isPasswordValid(user.password);
    };
    const isValidEmail = () => {
        return isEmailValid(user.email);
    };
    const allInputsAreValid = () => {
        return isValidEmail() && isValidPassword()
    }
  
    if(isLoggedIn) return <Redirect to={"/"} />

    return (
        <div className="login" onClick={(e)=> e.stopPropagation()}>
            <div className="login__form-container">
                <div className="login__form-block">
                    <div className="heading">
					    <h2 className="title-head">{title}</h2>
					    <p>{subtitle}<Link to={subtitleLinkTo}>Register here</Link></p>
				    </div>	
                    <form onSubmit={onLoginSubmit} method="post">
                        <div className="form-group ">
                            <label htmlFor="email">email</label>
                            <input  name="email" onChange={handleInputChange} 
                                value={user.email} type="email" 
                                className={`form-control ${!isValidEmail()&& user.email.length > 0?'input-error':''}`} 
                                placeholder="youremail@gmail.com" id="email"/>
                            {!isValidEmail()&& user.email.length > 0&&<span className="error-message">{'Please provide a valid email address '}</span>}

                        </div>
                        <div className="hide-show ">
                            <div className="checkbox-group">
                                <label htmlFor="password">Password</label>
                                <span onClick={()=>setVisible(!visible)} className="caption">{visible?'Hide':'Show'}</span>
                            </div>
                            <div onMouseLeave={()=>setIsRandomPasswordRequested(false)} className="password-group">
                                <input autoComplete="none" name="password" onClick={()=>setIsRandomPasswordRequested(true)}   
                                    onFocus={()=>setIsRandomPasswordRequested(!isRandomPasswordRequested)} 
                                    onChange={handleInputChange} 
                                    value={user.password} type={visible?"text":"password"} 
                                    className={`form-control ${!isValidPassword()&& user.password.length > 0?'input-error':''}`} 
                                    placeholder="Your Password" id="password"/>
                                {!isValidPassword()&& user.password.length > 0&&
                                    <span className="error-message">{'password must be 8 characters, 1 of (@!#$%&), 1 uppercase and lowercase'}</span>
                                }
                            </div>
                        </div>
                        
                        <div className="forgot-remember">
                            <label className="control "><span className="caption">Remember me</span>
                                <input name="remember" type="checkbox" onChange={() =>setRemember(!remember)} checked={remember}/>
                                <div className="control__indicator"></div>
                             </label>
                            <span ><Link to="/forgot-password" className="forgot-pass">Forgot Password?</Link></span> 
                        </div>

                        <input type="submit"  value="Log in" className={`btn-block btn-primary ${!allInputsAreValid()&&'disabled'}`}/>

                        <span className="seprater">OR</span>    
                        <div className="icons">
                            <input type="button" value="Login with facebook" onClick={onLoginWithFacebook} className="btn btn-block auth-btn fb"/>
                            <input type="button" value="Login with Google" onClick={onLoginWithGoogle} className="btn btn-block auth-btn gl"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
