import React from 'react'
import {connect} from 'react-redux'
import {fetchVideosSuccess} from './redux/actions'
import VideoItem from './VideoItem'
const VideoList = (props) => {
    return (
        <div>
            <VideoItem {...props.videos}/>
            course video list
        </div>
    )
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchAllVideos: (value) => {dispatch(fetchVideosSuccess(value))}
     }
}
const  mapStateToProps = state =>{
    return {
        videos: state.videos
    }
    

}
export default connect(mapDispatchToProps, mapStateToProps)(VideoList)
