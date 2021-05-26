import React, {useEffect, useState, Fragment} from 'react';
import {Link,NavLink} from 'react-router-dom'
import {toast} from 'react-toastify'
// import {H1, H3, P2, P1, Title} from '../../../components/Typography'
// import Input from '../../../components/Input'
// import Favourites from '../Favourites'
// import PrivateExhibitions from '../Exhibitions/PrivateExhibitions'
import './style.scss'
// import {S3Upload} from '../../services/s3Upload'
// import {updateProfileImage, resetPassword} from '../../../services'
import Spinner from '../../../components/Spinner'
import defaultUserImage from "../../../assets/images/defaults/avatar.jpeg"
import { updatePassword } from '../redux/actions';

// import Button from "../../../components/Button";

const Profile = (props) => {    
    const {getUserData, isLoading, updateProfileData, isProfileUpdated, isLoggedIn, userProfile, logout} = props;
    // console.log('this logs on each key stroke, so use memo ' + userProfile)

    useEffect(() => {        
        getUserData()
        setUserData()
        
    }, []);
    //    useEffect(() => {
    //         const {id, name, email, avatar=defaultUserImage} = userProfile
    //         setName(name);
    //         setEmail(email);
    // }, [])// if i add dependency of userProfile it complains about uncontrolled, if i leave empty my inputs are not populated
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    console.log('name', name);
    const [errMsg, setErrMsg] = useState('');
    const [passErr, setPassErr] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // const [reset, setReset] = useState(false);
    const [photo, setPhoto] = useState('')
    const [isPhotoChanged, setPhotoChanged] = useState(false)
    const [disabled, setDisabled] = useState(false)
    // const [activeTab, setActiveTab] = useState('details');
    // const [photoFile, setPhotoFile] = useState({type: ''});
   function setUserData(){
        if(!isLoading){    
            const {id, name, email, avatar=defaultUserImage} = userProfile
            console.log('userProfile in fnc', userProfile)
            setName(name);
            setEmail(email);
        }
   }
 
   
    const handleLogout = async ()=>{
        await logout();
     }
     const isPasswordValid = (pass) => {
        return pass.length > 7 && /^(?=.*\d)(?=.*[!@$*()]).{8,}$/i.test(pass);
    };

    const checkPass = (pass) => {
        if (pass !== '' && !isPasswordValid(pass)) {
            setErrMsg('Your password must be at least 8 characters long and include at least one number and one of the following symbols: !@$*()');
        } else {
            setErrMsg('');
        }
    };

    const handleUpdatePassword = async () => {
        if (oldPassword.length > 7 && newPassword.length > 7) {
            setDisabled(true)
            const userPasswords = {oldPassword, newPassword, confirmPassword}
            const resp = await updatePassword(userPasswords);
            console.log('updatePasswordresp', resp);
            
            if (resp) {
                if (typeof resp !== 'string') {
                    console.log('resp = ', resp);
                    setDisabled(false);
                    // handleReset();
                } else {
                    handleDiscard();
                    setErrMsg(resp);
                    setDisabled(false);
                }
            }
        }
    };

    // const handleUpdate = async () => {
        // if (isPhotoChanged) {
        //     let fileType = photoFile.type
        //     // @ts-ignore
        //     fileType = fileType.split('/')
        //     fileType = fileType[1]
            
        //     setTimeout(() => {
        //         setDisabled(false)
        //         setPhotoChanged(false)
        //         setPhotoChanged(false);
        //         setPhotoFile({
        //             type: ''
        //         });
        //     }, 1000)
        // }

        // handleResetPassword();
    // };

    const resetName = () => {
        setName(userProfile.name);
    };

    // const handlePhotoChange = async (e) => {
    //     if (e.target.files.length > 0) {
    //         const selectedFile = e.target.files[0];
    //         const dot = selectedFile.name.lastIndexOf('.');
    //         const extension = selectedFile.name.substr(dot, selectedFile.name.length).toLowerCase();
    //         if (extension === '.jpeg' || extension === '.jpg' || extension === '.png' || extension === '.gif') {
    //             setPhotoChanged(true);
    //             setPhotoFile(selectedFile);
    //             const url = await URL.createObjectURL(selectedFile);
    //             setPhoto(url);
    //             setErrMsg('');
    //         } else {
    //             setErrMsg('Only file with the extension of jpeg, jpg, png and gif are allowed!');
    //             setTimeout(() => {
    //                 setErrMsg('');
    //             }, 2000)
    //         }
    //     }
    // };

    const handleDiscard = () => {
        setPhotoChanged(false);
        // setPhotoFile({
        //     type: ''
        // });
        setOldPassword("");
        setNewPassword("");
        resetName();
    };

    // const handleReset = () => {
    //     setReset(!reset);
    //     handleDiscard();
    // };

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    };
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
   
    const handleUpdateUserDetails = async (e) => {
        e.preventDefault()
        const userUserDetails = {name, email}
        await updateProfileData(userUserDetails); 
        toast.success('Details updated successfully')
     // console.log('Profile.tsx updateUserDetails', isProfileUpdated);   
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
                    <NavLink to="#">Edit Profile</NavLink>
                    <NavLink to="#">Delete Account</NavLink>
                </ul>
            </div>

			<div className="profile__edit-details">				
                <form className="details-form">
                        <h4> Edit Profile Details</h4>
                        <div className="form-group">
                            <label className="form-label">Name</label>
                            <div className="input-container">
                                <input name="name"  id="name" onChange={handleNameChange} className="form-control" type="text" value={name}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <div className="input-container">
                            {/* <input name="email" onChange={handleInputChange} value={email} type="email" className="form-control" placeholder="Enter Your Email address" id="email"/> */}
                            <input name="email" id="email" onChange={handleEmailChange} className="form-control" type="email" value={email}/>
                            </div>
                        </div>
                        {/* <div className="form-group">
                            <label className="form-label">Headline</label>
                            <div className="input-container">
                            <input onChange={(e)=>{handleHeadlineChange(e.target.value)}} className="form-control" type="text" value={headline}/>
                            <span className="help">Add a profisional headline like "Engineer at Uber" or "Architect".</span>
                            </div>
                        </div> */}
                        {/* <div className="form-group">
                            <h4 className="social__section">3. Social Links</h4>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Linkedin</label>
                            <div className="input-container">
                            <input className="form-control" type="text" value="www.linkedin.com"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Facebook</label>
                            <div className="input-container">
                            <input className="form-control" type="text" value="www.facebook.com"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Twitter</label>
                            <div className="input-container">
                            <input className="form-control" type="text" value="www.twitter.com"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Instagram</label>
                            <div className="input-container">
                                 <input className="form-control" type="text" value="www.instagram.com"/>
                            </div>
                        </div> */}
                        <div className="cta-btn-section">
                            <button onClick={handleUpdateUserDetails} type="submit" className="btn">Save changes</button>
                            <button type="reset" className="btn">Cancel</button>
                        </div>
                </form>
                {/* <form className="password-form">
                        <h4> Change Password</h4>
                        <div className="form-group">
                            <label className="form-label">Current Password</label>
                            <div className="input-container">
                                <input className="form-control" type="password" value=""/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">New Password</label>
                            <div className="input-container">
                                <input className="form-control" type="password" value=""/>
                            </div>                        </div>
                        <div className="form-group">
                            <label className="form-label">Re-Type Password</label>
                            <div className="input-container">
                                <input className="form-control" type="password" value=""/>
                            </div>                        
                        </div>
                        <div className="cta-btn-section">
                            <button onClick={handleUpdatePassword} type="reset" className="btn">Update Password</button>
                            <button type="reset" className="btn">Cancel</button>
                        </div>
                        
                </form> */}
			</div>
        </div>

        }
        
    </>
    )
}

export default Profile
