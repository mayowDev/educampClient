import { connect } from 'react-redux'
import Profile from './Profile'
import {getUserData, updateProfileData, updateProfileImage, updatePassword, deleteAccount } from '../redux/actions'

const mapStatesToProps = ( state) => {  
  // console.log('state.auth',state.auth);
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = dispatch => ({
  getUserData: () => dispatch(getUserData()),
  updateProfileData:(data)=> dispatch(updateProfileData(data)),
  updateProfileImage:(imgFile)=> dispatch(updateProfileImage(imgFile)),
  updatePassword:(data)=> dispatch(updatePassword(data)),
  deleteAccount:()=> dispatch(deleteAccount()),
})

export default connect(mapStatesToProps, mapDispatchToProps)(Profile)
