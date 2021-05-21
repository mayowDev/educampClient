import { connect } from 'react-redux'
import Profile from './Profile'
import { updateProfileData, getUserData,  updateProfileImage } from '../redux/actions'

const mapStatesToProps = ( state) => {  
  // console.log('state.auth.userProfileData',state.auth.userProfileData);
  
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = dispatch => ({
  getUserData: () => dispatch(getUserData())
})

export default connect(mapStatesToProps, mapDispatchToProps)(Profile)
