import React, {useEffect, useState, Fragment} from 'react'
import {H1, H3, P2, P1, Title} from '../../../components/Typography'
import Input from '../../../components/Input'
// import Favourites from '../Favourites'
// import PrivateExhibitions from '../Exhibitions/PrivateExhibitions'
import './style.scss'
// import {S3Upload} from '../../services/s3Upload'
import {updateProfileImage, resetPassword} from '../../../services'
// import {Link} from 'react-router-dom'

import {logout} from '../../../utils';

import Button from "../../../components/Button";

const Profile = (props) => {    
    const {getProfileData, profileData} = props;
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [errMsg, setErrMsg] = useState('');
    // const [passErr, setPassErr] = useState();
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [reset, setReset] = useState(false);
    const [photo, setPhoto] = useState('')
    const [isPhotoChanged, setPhotoChanged] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [activeTab, setActiveTab] = useState('bookmarks');
    const [photoFile, setPhotoFile] = useState({type: ''});
    
    useEffect(() => {
        getProfileData();
    }, [])
    // function getData() {
    //     const {name, email} = profileData
    //     setFullName(name);
    //     setEmail(email)
    // }

    // useEffect(() => {
    //Todo : find out how  useeffect works with dependencies and why the console data is loading without stop when i set props.profiledat as dependenciy
    // Solution : error was in reducer.ts, trying to use object instead of array
    // },[]);

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

    // useEffect(() => {
    //     checkPass(oldPassword);
    // }, [oldPassword]);

    // useEffect(() => {
    //     checkPass(newPassword);
    // }, [newPassword]);

    // useEffect(() => {
    //     if (fullName !== profileData.name && fullName.length < 4) {
    //         setErrMsg('Name must contain 4 letter');
    //     } else {
    //         checkPass(newPassword);
    //         checkPass(oldPassword);
    //     }
    // }, [fullName]);

    const handleResetPassword = async () => {
        if (oldPassword.length > 7 && newPassword.length > 7) {
            setDisabled(true)
            const userData = {oldPassword, newPassword}
            const resetToken = 'sometoken'
            const resp = await resetPassword(userData, resetToken);
            if (resp) {
                if (typeof resp !== 'string') {
                    console.log('resp = ', resp);
                    setDisabled(false);
                    handleReset();
                } else {
                    handleDiscard();
                    setErrMsg(resp);
                    setDisabled(false);
                }
            }
        }
    };

    const splitOn = (slicable, ...indices) =>
        [0, ...indices].map((n, i, m) => slicable.slice(n, m[i + 1]));

    const handleUpdate = async () => {
        if (isPhotoChanged) {
            let fileType = photoFile.type
            // @ts-ignore
            fileType = fileType.split('/')
            fileType = fileType[1]
            // const fileName = `${Date.now()}.${fileType}`

            // @ts-ignore
            // const newFile = new File([photoFile], fileName, {type: fileType})

            // const Key = `${uploadMeta.upload.Key}${fileName}`
            // const Bucket = uploadMeta.upload.Bucket

            // await S3Upload({
            //     Key,
            //     Bucket,
            //     Body: newFile
            // })
            // const resp = await updateProfileImage({
            //     assetKey: Key
            // })

            // photo && getUpdatedProfileDataSuccess({
            //     ...resp,
            //     data: {
            //         ...resp.data,
            //         image: {
            //             ...resp.data.image,
            //             data: {
            //                 ...resp.data.image.data,
            //                 signedUrl120: photo,
            //                 signedUrl336: photo
            //             }
            //         }
            //     }
            // })
            // updateProfileImageData({
            //     ...resp.data.image,
            //     data: {
            //         ...resp.data.image.data,
            //         signedUrl120: photo,
            //         signedUrl336: photo
            //     }
            // })
            setTimeout(() => {
                setDisabled(false)
                setPhotoChanged(false)
                setPhotoChanged(false);
                setPhotoFile({
                    type: ''
                });
            }, 1000)
        }

        // handleFullName();
        handleResetPassword();
    };

    // const handleFullName = () => {
    //     if (fullName !== "" && fullName !== profileData.firstname + profileData.firstname) {
    //         const fullNameSpaceIndex = fullName.indexOf(" ");
    //         if (fullNameSpaceIndex !== -1) {
    //             const fullNameCopy = fullName;
    //             const newFirstName = splitOn(fullNameCopy, fullNameSpaceIndex)[0];
    //             const newLastName = splitOn(fullNameCopy, fullNameSpaceIndex)[1];
    //             // if ((newFirstName || newLastName) && (profileData.firstname !== newFirstName || profileData.lastname !== newLastName)) {
    //             //     setDisabled(true);
    //             //     updateProfileData({firstname: newFirstName || '', lastname: newLastName || ''});
    //             //     setTimeout(() => {
    //             //         setDisabled(false)
    //             //     }, 500)
    //             // }
    //         } else {
    //             setDisabled(true);
    //             updateProfileData({firstname: fullName || '', lastname: "" || ''});
    //             setTimeout(() => {
    //                 setDisabled(false)
    //             }, 500)
    //         }
    //     }
    // };

    const resetFullName = () => {
        setFullName(profileData.firstname + profileData.lastname);
    };

    const handlePhotoChange = async (e) => {
        if (e.target.files.length > 0) {
            const selectedFile = e.target.files[0];
            const dot = selectedFile.name.lastIndexOf('.');
            const extension = selectedFile.name.substr(dot, selectedFile.name.length).toLowerCase();
            if (extension === '.jpeg' || extension === '.jpg' || extension === '.png' || extension === '.gif') {
                setPhotoChanged(true);
                setPhotoFile(selectedFile);
                const url = await URL.createObjectURL(selectedFile);
                setPhoto(url);
                setErrMsg('');
            } else {
                setErrMsg('Only file with the extension of jpeg, jpg, png and gif are allowed!');
                setTimeout(() => {
                    setErrMsg('');
                }, 2000)
            }
        }
    };

    const handleDiscard = () => {
        setPhotoChanged(false);
        setPhotoFile({
            type: ''
        });
        // getData();
        setOldPassword("");
        setNewPassword("");
        resetFullName();
    };

    const handleReset = () => {
        setReset(!reset);
        handleDiscard();
    };

    const handleEmailChange = (value) => {
        console.log('value coming from email ==> ', value);
        setEmail(value)
    };

    return (
        <div className='profile-wrapper'>
            {/* <div className='addimage-popup'>
        <P2 className='' value='Upload a photo' />
        <P2 className='' value='Remove Photo' />
        <P2 className='' value='Cancel' />
      </div> */}
            <div className='add-image'>
                <div className="container nav-container">
                    <div className='profile-nav'>
                        <div onClick={() => setActiveTab('bookmarks')}>
                            <Title className={'nav-item big' + (activeTab === 'bookmarks' ? ' active' : '')}
                                   value="Bookmarks"/>
                        </div>
                        <div onClick={() => setActiveTab('exhibitions')}>
                            <Title className={'nav-item big' + (activeTab === 'exhibitions' ? ' active' : '')}
                                   value="Exhibitions"/>
                        </div>
                        <div onClick={() => setActiveTab('settings')}>
                            <Title className={'nav-item big' + (activeTab === 'settings' ? ' active' : '')}
                                   value="Settings"/>
                        </div>
                    </div>
                </div>
            </div>
            {
                activeTab === "settings" &&
                <Fragment>
                  <div className="container">
                    <div className='add-image settings-section'>
                      <div className='image-title-wrapper'>
                        <div className={`image-wrapper ${disabled ? 'upload-image-disabled' : ''}`}>
                          <label>
                            <input type='file' onChange={handlePhotoChange}/>
                              {
                                  photo
                                      ? <>
                                          <img src={photo} alt={'change photo'}/>
                                          <P2 className='' value='Change photo'/>
                                      </>
                                      : <>
                                          <svg
                                              xmlns='http://www.w3.org/2000/svg' width='120' height='120'
                                              viewBox='0 0 120 120' fill='none'
                                          >
                                              <circle
                                                  cx='60' cy='60' r='58.5' fill='white' stroke='#939393'
                                                  stroke-width='3' stroke-dasharray='5 5'
                                              />
                                              <path
                                                  d='M62.8445 49.1819H59.6754V58.9946H50.0918V62.0873H59.6754V71.9382H62.8445V62.0873H72.4282V58.9946H62.8445V49.1819Z'
                                                  fill='#7D7D7D'
                                              />
                                          </svg>
                                          <P2 className='' value='Add a photo'/>
                                      </>
                              }
                          </label>
                        </div>
                        <div className='image-title'>
                          <H1 className="bold" value={profileData && profileData.name}/>
                            {/* <P1 className="" value='Fly Gallery, New York, NY'/> */}
                        </div>
                      </div>

                      <div className="buttons-wrapper">
                          {
                              ((profileData && fullName !== profileData.firstname + profileData.lastname) || isPhotoChanged || oldPassword.length > 0 || newPassword.length > 0) ? (
                                      <>
                                          <Button
                                              value='Discard Changes'
                                              size="large"
                                              className='button__dark'
                                              type="primary"
                                              onClick={() => handleDiscard()}
                                          />
                                          <Button
                                              onClick={handleUpdate}
                                              value='Save Changes'
                                              size="large"
                                              className='button__bright'
                                          />
                                      </>
                                  )
                                  :
                                  <Button
                                      onClick={() => logout()}
                                      value='Logout'
                                      size="large"
                                      className='button__bright'
                                  />
                          }
                      </div>
                    </div>
                    <div className='information-wrapper'>
                      <P1 className='error' value={errMsg || ''}/>
                      <div className='container'>
                        <H3 value='Account information'/>
                        <form className='input-wrapper'>
                          <div className='information-class'>
                            <Input
                              value={fullName}
                              name="name"
                              label='First and Last Name'
                              type='text'
                              placeholder=''
                              className='input__bright'
                              disabled={disabled}
                              onChange={(e) => setFullName(e.target.value)}
                            />
                          </div>
                          <div className='information-class'>
                            <Input
                              value={email}
                              name="email"
                              label='Email Address'
                              type='text'
                              placeholder=''
                              disabled
                              className='input__bright'
                              onChange={(e) => handleEmailChange(e.target.value)}
                            />
                              {reset === false &&
                              <div className="reset" onClick={() => {
                                  setReset(!reset)
                              }}>
                                <P1 value="Reset Password"/>
                              </div>
                              }
                          </div>
                            {
                                reset && (
                                    <>
                                        <div className='information-class cursor-disabled'>
                                            <Input
                                                value={oldPassword}
                                                label='Old Password'
                                                name='old-password'
                                                type='password'
                                                autoComplete="new-password"
                                                placeholder=''
                                                disabled={disabled}
                                                className='input__bright'
                                                onChange={(e) => setOldPassword(e.target.value)}
                                            />
                                        </div>
                                        <div className='information-class'>
                                            <Input
                                                value={newPassword}
                                                label='New Password'
                                                name="new-password"
                                                type='password'
                                                placeholder=''
                                                disabled={disabled}
                                                className='input__bright'
                                                onChange={(e) => setNewPassword(e.target.value)}
                                            />
                                            {reset === true &&
                                            <div className="reset" onClick={handleReset}>
                                              <P1 value="Cancel"/>
                                            </div>
                                            }
                                        </div>
                                    </>
                                )
                            }
                        </form>
                      </div>
                    </div>
                  </div>
                </Fragment>
            }
            {/* {
                activeTab === "bookmarks" &&
                <Favourites/>
            }
            {
                activeTab === "exhibitions" &&
                    // @ts-ignore
                <PrivateExhibitions/>
            } */}
        </div>
    )
}

export default Profile
