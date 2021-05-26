import React, {useEffect, useState, Fragment} from 'react'
// import {H1, H3, P2, P1, Title} from '../../../components/Typography'
// import Input from '../../../components/Input'
// import Favourites from '../Favourites'
// import PrivateExhibitions from '../Exhibitions/PrivateExhibitions'
import './style.scss'
// import {S3Upload} from '../../services/s3Upload'
// import {updateProfileImage, resetPassword} from '../../../services'
import Spinner from '../../../components/Spinner'
// import {logout} from '../../../utils';

// import Button from "../../../components/Button";

const Profile = (props) => {    
    const {getUserData, isLoading, userProfile} = props;
    // const [fullName, setFullName] = useState('')
    // const [email, setEmail] = useState('')
    // const [errMsg, setErrMsg] = useState('');
    // const [passErr, setPassErr] = useState();
    // const [oldPassword, setOldPassword] = useState('');
    // const [newPassword, setNewPassword] = useState('');
    // const [reset, setReset] = useState(false);
    // const [photo, setPhoto] = useState('')
    // const [isPhotoChanged, setPhotoChanged] = useState(false)
    // const [disabled, setDisabled] = useState(false)
    // const [activeTab, setActiveTab] = useState('settings');
    // const [photoFile, setPhotoFile] = useState({type: ''});

    // function fetchUserData() {
    //     const {name, email} = userProfile
    //     setFullName(name);
    //     setEmail(email)
    //     
    // }
    useEffect(() => {        
        getUserData()
    }, []);

    //  const isPasswordValid = (pass) => {
    //     return pass.length > 7 && /^(?=.*\d)(?=.*[!@$*()]).{8,}$/i.test(pass);
    // };

    // const checkPass = (pass) => {
    //     if (pass !== '' && !isPasswordValid(pass)) {
    //         setErrMsg('Your password must be at least 8 characters long and include at least one number and one of the following symbols: !@$*()');
    //     } else {
    //         setErrMsg('');
    //     }
    // };

    // const handleResetPassword = async () => {
    //     if (oldPassword.length > 7 && newPassword.length > 7) {
    //         setDisabled(true)
    //         const userData = {oldPassword, newPassword}
    //         const resetToken = 'sometoken'
    //         const resp = await resetPassword(userData, resetToken);
    //         if (resp) {
    //             if (typeof resp !== 'string') {
    //                 console.log('resp = ', resp);
    //                 setDisabled(false);
    //                 handleReset();
    //             } else {
    //                 handleDiscard();
    //                 setErrMsg(resp);
    //                 setDisabled(false);
    //             }
    //         }
    //     }
    // };

    // const splitOn = (slicable, ...indices) =>[0, ...indices].map((n, i, m) => slicable.slice(n, m[i + 1]));

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

    // const resetFullName = () => {
    //     setFullName(userProfile.name);
    // };

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

    // const handleDiscard = () => {
    //     setPhotoChanged(false);
    //     setPhotoFile({
    //         type: ''
    //     });
    //     // getData();
    //     setOldPassword("");
    //     setNewPassword("");
    //     // resetFullName();
    // };

    // const handleReset = () => {
    //     setReset(!reset);
    //     handleDiscard();
    // };

    // const handleEmailChange = (value) => {
    //     setEmail(value)
    // };
    
    return (
        <div className='profile-wrapper'>
              {
                isLoading?<Spinner/>:
                (
                    <h1>{userProfile.email}</h1>
                    
                )

              }
            
        </div>
    )
}

export default Profile
