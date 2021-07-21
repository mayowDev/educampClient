import React, {useState} from 'react'
import {Redirect, Link, useHistory} from 'react-router-dom';
import generator from "generate-password";

const Login = (props) => {
    const {location:{state}, isLoggedIn, loginWithGoogle, loginWithFacebook, login} = props
    const [user, setUser] = useState({ email:'', password:''})
    const [remember, setRemember] = useState(false)
    const [visible, setVisible] = useState(false);
    const [isRandomPasswordRequested,setIsRandomPasswordRequested] = useState(false)
    const history = useHistory()
    const handleInputChange = (e)=>{
        setUser({
          ...user,
          [e.target.name]: e.target.value
        });
    }
    const handleSuggestRandomPassword = (e)=>{
        e.preventDefault();
        let password = generator.generate({
            length: 10,
            numbers: true,
            lowercase:true,
            uppercase:true,
            symbols:true,
        })
        // setRandomPassword(password)
        setUser({...user,password})
        setVisible(true)
    }

    const  handleRemember = (e) => {
        if(e.target.name === 'remember') setRemember(!remember)
    }
    const onLoginSubmit = e => {
        e.preventDefault();
        try {
            if(!allInputsAreValid()){return setUser({ email:' ', password:' '})}
            login(user)  
        } catch (error) {
            console.log(error);
        }    
    }
    const handleLoginWithFacebook =(e)=>{
        try {
            e.preventDefault();
            loginWithFacebook();
        } catch (error) {
            console.log(error);
        }
    }
    const handleLoginWithGoogle =(e)=>{
        try {
            e.preventDefault();
            loginWithGoogle();
            // localStorage.setItem(LOCAL_STORAGE_KEYS.LOGIN_STATE, 'true');
            // window.location.href = '/'
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

    const validPassword = () => {
        return isPasswordValid(user.password);
    };
    const validEmail = () => {
        return isEmailValid(user.email);
    };
    const allInputsAreValid = () => {
        return validEmail() && validPassword()
    }
    if(isLoggedIn) return <Redirect to={"/"} />//state?state.from.pathname:
    return (
        <div className="login">
            {/* <Sidebar/> */}
            <div className="login__form-container">
                <div className="login__form-block">
                    <div className="heading">
					    <h2 className="title-head">Login in </h2>
					    <p>Don't have an Account? <Link to="/register">Register here</Link></p>
				    </div>	
                    <form onSubmit={onLoginSubmit} method="post">
                        <div className="form-group ">
                            <label htmlFor="email">email</label>
                            <input  name="email" onChange={handleInputChange} value={user.email} type="email" className={`form-control ${!validEmail()?'input-error':''}`} placeholder="youremail@gmail.com" id="email"/>
                            {!validEmail()&& user.email.length > 0&&<span className="error-message">{'Please provide a valid email address '}</span>}

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
                                    className={`form-control ${!validPassword()?'input-error':''}`} 
                                    placeholder="Your Password" id="password"/>
                                {!validPassword()&& user.password.length > 0&&
                                    <span className="error-message">{'password must be 8 characters, 1 of (@!#$%&), 1 uppercase and lowercase'}</span>
                                }
                            </div>
                        </div>
                        
                        <div className="forgot-remember">
                            <label className="control "><span className="caption">Remember me</span>
                                <input name="remember" type="checkbox" onChange={handleRemember} checked={remember}/>
                                <div className="control__indicator"></div>
                             </label>
                            <span ><Link to="/forgot-password" className="forgot-pass">Forgot Password?</Link></span> 
                        </div>

                        <input type="submit"  value="Log in" className={`btn-block btn-primary ${!allInputsAreValid()&&'disabled'}`}/>

                        <span className="seprater">OR</span>    
                        <div className="icons">
                            <input type="button" value="Login with facebook" onClick={handleLoginWithFacebook} className="btn btn-block auth-btn fb"/>
                            <input type="button" value="Login with Google" onClick={handleLoginWithGoogle} className="btn btn-block auth-btn gl"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
