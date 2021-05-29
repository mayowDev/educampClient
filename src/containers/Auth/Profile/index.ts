import { connect } from 'react-redux'
import Profile from './Profile'
import {getUserData, logout, updateProfileData, updateProfileImage, updatePassword, deleteAccount } from '../redux/actions'
import './style.scss'
const mapStatesToProps = ( {auth}) => {  
  // console.log('profile auth',auth);
  return {
    isApiError: auth.isApiError,
    isLoading: auth.loading,
    isLoggedIn: auth.isLoggedIn,
    userProfile: auth.userProfile,
    isProfileUpdated: auth.isProfileUpdated,
    isProfileImgUpdated: auth.isProfileImgUpdated
  }
}

const mapDispatchToProps = dispatch => ({
  getUserData: () => dispatch(getUserData()),
  updateProfileData:(data)=> dispatch(updateProfileData(data)),
  updateProfileImage:(imgFile)=> dispatch(updateProfileImage(imgFile)),
  updatePassword:(data)=> dispatch(updatePassword(data)),
  deleteAccount:(email:string)=> dispatch(deleteAccount(email)),
  logout:()=> dispatch(logout())
})

export default connect(mapStatesToProps, mapDispatchToProps)(Profile)
