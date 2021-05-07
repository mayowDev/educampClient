import React, {useState} from 'react'
import Logo from '../../assets/images/logo-white@2x.png';
import Google from '../../assets/images/icon-google.png';

const Signup = ({signup}) => {
    const [user, setUser] = useState({name: '', email:'', password:''})
    //TODO: handle all validation errors:- taken email, input values, password length and strength, API VALIDATION: taken emails
    
    const handleInputChange = (e)=>{
        setUser({
          ...user,
          [e.target.name]: e.target.value
        });
    }

    const onSignUpSubmit = e => {
        console.log('your information is: ' + user.email, user.name, user.password);
        e.preventDefault();
        signup(user)
    }

    return (
        <div className="signup">
            <div className="signup__sidebar"><a href="/"><img src={Logo} alt="geekcamp-logo"/></a></div>
            <div className="signup__form-container">
                <div className="signup__form-block">
                    <div className="heading">
					    <h2 className="title-head">Sign Up <span>Now</span></h2>
					    <p>Have an Account? <a href="login.html">Login here</a></p>
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
                        <input type="submit" value="Sign Up" className="btn btn-block btn-primary"/>

                        <span className="seprater">OR</span>    
                        <div className="icons">
                            <a href="#" className="btn btn-block auth-btn fb"> <span></span> Sign up with facebook</a>
                            <a href="#" className="btn btn-block auth-btn gl"><img src={Google} alt="Google-logo"/> Sign up with Google</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
