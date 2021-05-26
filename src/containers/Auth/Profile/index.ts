import { connect } from 'react-redux'
import Profile from './Profile'
import {getUserData, logout, updateProfileData, updateProfileImage, updatePassword, deleteAccount } from '../redux/actions'

const mapStatesToProps = ( {auth}) => {  
  // console.log('profile auth',auth);
  return {
    isLoading: auth.loading,
    isLoggedIn: auth.isLoggedIn,
    userProfile: auth.userProfile,
    isProfileUpdated: auth.isProfileUpdated
  }
}

const mapDispatchToProps = dispatch => ({
  getUserData: () => dispatch(getUserData()),
  updateProfileData:(data)=> dispatch(updateProfileData(data)),
  updateProfileImage:(imgFile)=> dispatch(updateProfileImage(imgFile)),
  updatePassword:(data)=> dispatch(updatePassword(data)),
  deleteAccount:()=> dispatch(deleteAccount()),
  logout:()=> dispatch(logout())
})

export default connect(mapStatesToProps, mapDispatchToProps)(Profile)
