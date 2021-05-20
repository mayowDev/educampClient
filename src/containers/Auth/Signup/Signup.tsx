import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import Logo from '../../../assets/images/Logo-small.png';
import Google from '../../../assets/images/icon-google.png';
import Button from '../../../components/Button'
const Signup = ({signup}) => {
    const [user, setUser] = useState({name: '', email:'', password:'', confirmPassword:'', role:'student'})
    //TODO: handle all validation errors:- taken email, input values, password length and strength, API VALIDATION: taken emails
    const history = useHistory()
    const handleInputChange = (e)=>{
        setUser({
          ...user,
          [e.target.name]: e.target.value
        });
    }

    const onSignUpSubmit = e => {
        e.preventDefault();
        const res = signup(user)
        // console.log('signup.tsx', res)
        // history.push('/verify')
    }

    return (
        <div className="signup">
            <div className="signup__sidebar"><a href="/"><img src={Logo} alt="geekcamp-logo"/></a></div>
            <div className="signup__form-container">
                <div className="signup__form-block">
                    <div className="heading">
					    <h2 className="title-head">Sign Up <span>Now</span></h2>
					    <p>Have an Account? <Link to="/login">Login here</Link></p>
				    </div>	
                    <form onSubmit={onSignUpSubmit} method="post">
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
                        <input type="submit" value="Sign Up" className="btn btn-block btn-primary"/>

                        <span className="seprater">OR</span>    
                        <div className="icons">
                            <a href="#" className="btn btn-block auth-btn fb">Sign up with facebook</a>
                            <a onClick={()=>console.log('login with google')} className="btn btn-block auth-btn gl"><img src={Google} alt="Google-logo"/> Sign up with Google</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
