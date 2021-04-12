import { connect } from 'react-redux'
import Profile from './Profile'
import { updateProfileDataInit, getUpdatedProfileDataInit, getUpdatedProfileDataSuccess, updateProfileImageData } from './redux/actions'

const mapStatesToProps = ({ profile }) => {
  return {
    profileData: profile.profileData,
    uploadMeta: profile.uploadMeta
  }
}

const mapDispatchToProps = dispatch => ({
  updateProfileData: (data) => { dispatch(updateProfileDataInit(data)) },
  getUpdatedProfileDataSuccess: (data) => { dispatch(getUpdatedProfileDataSuccess(data)) },
  getUpdatedProfileDataInit: () => { dispatch(getUpdatedProfileDataInit()) },
  updateProfileImageData: (data) => { dispatch(updateProfileImageData(data)) }
})

export default connect(mapStatesToProps, mapDispatchToProps)(Profile)
