import { connect } from 'react-redux'
import Profile from './Profile'
import { updateProfileDataInit, getUpdatedProfileDataInit, updateProfileImageData } from './redux/actions'

const mapStatesToProps = ( state) => {
  console.log('profile connect =>' , state);
  
  return {
    profileData: state.profile.profileData,
    // uploadMeta: profile.uploadMeta
  }
}

const mapDispatchToProps = dispatch => ({
  updateProfileData: (data) => { dispatch(updateProfileDataInit(data)) },
  // getUpdatedProfileDataSuccess: (data) => { dispatch(getUpdatedProfileDataSuccess(data)) },
  getUpdatedProfileDataInit: () => { dispatch(getUpdatedProfileDataInit()) },
  updateProfileImageData: (data) => { dispatch(updateProfileImageData(data)) }
})

export default connect(mapStatesToProps, mapDispatchToProps)(Profile)
