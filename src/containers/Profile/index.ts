import { connect } from 'react-redux'
import Profile from './Profile'
import { updateProfileData, getProfileData, getUpdatedProfileData, updateProfileImage } from './redux/actions'

const mapStatesToProps = ( state) => {  
  return {
    profileData: state.profile,
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileData : () => {dispatch(getProfileData())},
  updateProfileData: (data) => { dispatch(updateProfileData(data)) },
  updateProfileImage: (data) => { dispatch(updateProfileImage(data)) },
  getUpdatedProfileData: () => { dispatch(getUpdatedProfileData()) }
})

export default connect(mapStatesToProps, mapDispatchToProps)(Profile)
