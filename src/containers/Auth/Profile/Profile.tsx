import React, {useEffect, useState, Fragment} from 'react';
import {Link,NavLink, useHistory} from 'react-router-dom'
import {toast} from 'react-toastify'
// import {H1, H3, P2, P1, Title} from '../../../components/Typography'
// import Input from '../../../components/Input'
// import Favourites from '../Favourites'
import Button from '../../../components/Button'

import Spinner from '../../../components/Spinner'
// import defaultUserImage from "../../../assets/images/defaults/avatar.jpeg"


const Profile = (props) => {    
    const {isLoading, getUserData, updateProfileImage, updatePassword, updateProfileData, isProfileUpdated, isLoggedIn, userProfile, logout, deleteAccount} = props;
    // console.log('this logs on each key stroke, so use memo ' + userProfile)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [errMsg, setErrMsg] = useState('');
    const [isPassValid, setIsPassValid] = useState(true);
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [deleteEmail,setDeleteEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [disabled, setDisabled] = useState(true)
    // const [activeTab, setActiveTab] = useState('details');
    const history = useHistory()
    useEffect(() => {
        getUserData();       
    }, []);

    useEffect(() => {
        if(userProfile && userProfile.id){
            const {  name, email } = userProfile;
            setName(name);
            setEmail(email)        }
    }, [userProfile.id]); 

    const handlePasswordChange = (val)=>{
        setPassword(val)
    }
    const handleConfirmPassword = (val)=>{
        setConfirmPassword(val)
    }
    const handleOldPassword = (val)=>{
        setOldPassword(val)
    }
    
    // const handleLogout = async ()=>{
    //     await logout();
    //  }
     const isPasswordLenghtValid = (pass) => {
        return pass.length > 7 && /^(?=.*\d)(?=.*[!@$*()]).{8,}$/i.test(pass);
    };
        // const {oldPassword, password, confirmPassword}  = passwords 
        // if (!isPasswordLenghtValid(oldPassword) && oldPassword.length < 2) {
        //     //password is not valid
        //     setIsPassValid(false)
        //     setErrMsg(`password must be at least 8 characters long and include at least one number and one special character`)
        // }
        // console.log('isPassValid', isPassValid);
    const handleUpdatePassword = async () => {
        const passwords = {oldPassword, password, confirmPassword} 
        
            setDisabled(false)
            await updatePassword(passwords);
            toast.dark("Password Updated Successfully")
        };

    const handlePasswordChangeDiscard = () => {
        setOldPassword("");
        setConfirmPassword("");
        setPassword("");
    };

    const handleEmailChange = (value) => {
        setEmail(value)
    };
    const handleNameChange = (value) => {
        setName(value)
    }
    const handleUpdateUserDetails = async (e) => {
        e.preventDefault()
        const userUserDetails = {name, email}
        await updateProfileData(userUserDetails); 
        toast.dark('Details updated successfully')
    }
    const isEmailValid = (mail) => {
        return /^\S+@\S+\.\S+$/.test(mail) === true;
    };
    const validEmail = () => {
        return isEmailValid(deleteEmail);
    };
    const handleDeleteAccount = async ()=>{
        await deleteAccount(deleteEmail);
        await logout();
        toast.info('Account Deleted Successfully')
        history.push('/')
    }

    return (
        <>
        <div className="background-hero">
            <h1>Profile</h1>
        </div>
        {
            isLoading?<Spinner/>:
            <div className='profile'>
            <div className="profile__sidebar">
                <div className="user-info">
                    <h5>avatar</h5>
                    <h4>{userProfile.name}</h4>
                    <h4>{userProfile.email}</h4>
                </div>
                <ul className="nav-links">
                    <NavLink to="/courses">Courses</NavLink>
                    <NavLink to="/payments">Payment Methods</NavLink>
                    <NavLink to="#">Change Password</NavLink>
                    <NavLink to="#">Delete Account</NavLink>
                </ul>
            </div>

			<div className="profile__edit-details">				
                <form className="details-form">
                        <h4> Edit Profile Details</h4>
                        <div className="form-group">
                            <label className="form-label">Name</label>
                            <div className="input-container">
                                <input autoComplete="on" name="name"  id="name" value={name} onChange={(e) => handleNameChange(e.target.value)} className="form-control" type="text" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <div className="input-container">
                                <input autoComplete="on" name="email" id="email" value={email} onChange={(e) => handleEmailChange(e.target.value)} className="form-control" type="email" />
                            </div>
                        </div>
                        <div className="cta-btn-section">
                            <button onClick={handleUpdateUserDetails} type="submit" className="btn">Save changes</button>
                            <button type="reset" className="btn">Cancel</button>
                        </div>
                </form>
                <form className="password-form">
                        <h4> Change Password</h4>
                        {isPassValid === false && <span className="password-error">{errMsg}</span>}
                        <div className="form-group">
                            <label className="form-label">Current Password</label>
                            <div className="input-container">
                                <input autoComplete="on" name="oldPassword" onChange={e=>handleOldPassword(e.currentTarget.value)} className="form-control" type="password" value={oldPassword}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">New Password</label>
                            <div className="input-container">
                                <input autoComplete="on" name="password" onChange={(e)=> handlePasswordChange(e.currentTarget.value)}  className="form-control" type="password" value={password}/>
                            </div>        
                        </div>
                        <div className="form-group">
                            <label className="form-label">Re-Type Password</label>
                            <div className="input-container">
                                <input autoComplete="on" name="confirmPassword" onChange={e=>handleConfirmPassword(e.currentTarget.value)} className="form-control" type="password" value={confirmPassword}/>
                            </div>    
                        </div>
                        {!disabled &&
                            <div className="cta-btn-section">
                                <button onClick={handleUpdatePassword} type="submit" className="btn">Update Password</button>
                                <button onClick={handlePasswordChangeDiscard} type="reset" className="btn">Discard Changes</button>
                            </div>
                        }
                </form>
                <div className="danger-area">
                    <h4 className="social__section">Delete Account</h4>
                    <p>Once you delete your account, there is no going back. Please be certain.</p>
                    <div className="form-group">
                            <label className="form-label">Email</label>
                            <div className="input-container">
                                <input autoComplete="on" name="deleteEmail" id="deleteEmail" 
                                value={deleteEmail} 
                                onChange={(e) => setDeleteEmail(e.target.value)} className="form-control" type="email"  
                                placeholder="Enter your email to delete this account"/>
                            </div>
                    </div>
                    {validEmail() &&
                        <div onClick={handleDeleteAccount} className="delete-btn-container">
                            <Button value="Delete Your Account"/>
                        </div>
                    }
                </div>
			</div>
        </div>
        }
    </>
    )
}

export default Profile
