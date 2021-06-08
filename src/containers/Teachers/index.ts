import {connect} from 'react-redux'
import TeachersList from './TeachersList'
import TeacherDetails from './TeacherDetails'
// import Teacher from './Teacher';
import {getAllTeachers, getTeacher, getTeacherByName} from './redux/actions'
import './style.scss'

const mapStateToProps = ({teachers})=>{
    return{
        teachers: teachers.teachersList,
        teacherDetails: teachers.teacherDetails,
        loading: teachers.loading,
        isNull: teachers.isNull
    }
}
const mapDispatchToProps = (dispatch) => ({
    getTeachers:() => dispatch(getAllTeachers()),
    getTeacherByName: (slug)=> dispatch(getTeacherByName(slug)),
    getTeacher:(id) => dispatch(getTeacher(id))
})

export default {
    Teachers: connect(mapStateToProps, mapDispatchToProps)(TeachersList),
    // AddTeacher: connect(mapStateToProps, mapDispatchToProps)(CreateTeacher),
    // EditTeacher: connect(mapStateToProps, mapDispatchToProps)(EditTeacher),
    TeacherDetails: connect(mapStateToProps, mapDispatchToProps)(TeacherDetails)
  }