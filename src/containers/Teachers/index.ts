import {connect} from 'react-redux'
import TeachersList from './TeachersList'
import TeacherDetails from './TeacherDetails'
import TeacherBoarding from './TeacherBording'
import TeacherProfile from './TeacherProfile';
import {getAllTeachers, getTeacher, getTeacherByName} from './redux/actions'
import {login, loginWithGoogle, loginWithFacebook} from '../Auth/redux/actions'

import './style.scss'

const mapStateToProps = ({teachers, auth})=>{
    return{
        teachers: teachers.teachersList,
        teacherDetails: teachers.teacherDetails,
        loading: teachers.loading,
        isNull: teachers.isNull,
        isLoggedIn: auth.isLoggedIn,
        isApiError: auth.isApiError,
    }
}
const mapDispatchToProps = (dispatch) => ({
    getTeachers:() => dispatch(getAllTeachers()),
    getTeacherByName: (slug)=> dispatch(getTeacherByName(slug)),
    getTeacher:(id) => dispatch(getTeacher(id)),
    login: (data) => {dispatch(login(data))},
    loginWithGoogle : ()=> dispatch(loginWithGoogle()),
    loginWithFacebook: ()=> dispatch(loginWithFacebook())
})

export default {
    Teachers: connect(mapStateToProps, mapDispatchToProps)(TeachersList),
    TeacherProfile: connect(mapStateToProps, mapDispatchToProps)(TeacherProfile),
    TeacherBoarding: connect(mapStateToProps, mapDispatchToProps)(TeacherBoarding),
    TeacherDetails: connect(mapStateToProps, mapDispatchToProps)(TeacherDetails)
}