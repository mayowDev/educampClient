import {connect} from 'react-redux'
import TeachersList from './TeachersList'
import TeacherDetails from './TeacherDetails'
// import Teacher from './Teacher';
import {getAllTeachers, getTeacher} from './redux/actions'
import './style.scss'

const mapStateToProps = ({teachers})=>{
    return{
        teachers: teachers.teachersList,
        teacherDetails: teachers.teacherDetails,
        loading: teachers.loading
    }
}
const mapDispatchToProps = (dispatch) => ({
    getTeachers:() => dispatch(getAllTeachers()),
    getTeacher:(id) => dispatch(getTeacher(id))
})

export default {
    Teachers: connect(mapStateToProps, mapDispatchToProps)(TeachersList),
    // AddTeacher: connect(mapStateToProps, mapDispatchToProps)(CreateTeacher),
    // EditTeacher: connect(mapStateToProps, mapDispatchToProps)(EditTeacher),
    TeacherDetails: connect(mapStateToProps, mapDispatchToProps)(TeacherDetails)
  }