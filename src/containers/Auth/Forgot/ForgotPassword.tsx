import React, { useState, Fragment } from 'react';
import { H1, P1, P2, SubTitle } from '../../../components/Typography';
import { Heading, Paragraph } from '../../../components/Typography';
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import {forgotPassword} from "../../../services";
import {Link, useHistory} from 'react-router-dom';
import Close from "../../../assets/icons/close.svg";
// @ts-ignore
const Forgot:React.FC = ({ isLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [isSuccess, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const history = useHistory()

    const handleReset = async () => {
        try {
            const result = await forgotPassword({
                email
            });
            console.log('result', result);
            
            if(result) {
                setSuccess(true)
            }
            else{
                setError(true);
            }
        }
        catch(e) {
            console.log(e);
            setSuccess(false)
        }
    };

    const isEmailValid = (mail) => {
        return /^\S+@\S+\.\S+$/.test(mail) === true;
    };


    const validEmail = () => {
        return isEmailValid(email);
    };

    const handleClose = () => {
        history.goBack();
    };

    return (
        <div style={{ height: '100%' }}>
            <div className="form-page verify-page form" >
                <div className="form__container" style={{ margin: 'auto' }}>
                    {/*<SubTitle value="Not a problem" />*/}
                    <Heading value='Forgot Password' />
                    {
                        isSuccess ?
                            <Paragraph value="We’ve sent you a link to username/email with instructions to reset your password." />
                            :
                            <Fragment>
                                <Input
                                    value={email}
                                    label='Email'
                                    type='email'
                                    name="email"
                                    placeholder=''
                                    className={`input__dark ${error ? 'input__error' : ''}`}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {error && <P2 className="error" value="We don't have any user using this Email!" />}
                                {
                                    validEmail() && (
                                        <>
                                        <br /><br />
                                        <Button
                                            value='Send Email'
                                            size="large"
                                            className='button__dark'
                                            type="primary"
                                            onClick={() => handleReset()}
                                        />
                                        </>
                                    )
                                }
                            </Fragment>
                    }

                    {
                        isSuccess && isLoggedIn === false && (
                            <>
                                <Link to="/login">
                                    <br /><br />
                                    <Button
                                        value='Go to Login'
                                        className='button__dark'
                                        onClick={() => console.log('Clicked!')}
                                    />
                                </Link>
                            </>
                        )
                    }
                </div>
                <div onClick={handleClose} className='cross'>
                   <img src={Close} alt="close" />
                </div>
            </div>
        </div>
    )
};
export default Forgot;
