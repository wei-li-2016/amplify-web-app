import React from 'react'
import Masonry from 'react-masonry-component'
import VideoItem from './VideoItem'

const masonryOptions = {
  transitionDuration: 0
}

const VideosList = ({ videos, handleVideo, isLoading }) => {
  if (videos.length > 0) {
    return (
      <Masonry className={'VideosList row'} options={masonryOptions} >
        {videos.map((video, k) =>
          <VideoItem key={k} video={video} handleVideo={handleVideo} />
        )}
      </Masonry>
    )
  } else {
    return (
      <div className='card-panel grey lighten-5' style={isLoading ? {display: 'none'} : {}}>
        No videos were found for this channel
      </div>
    )
  }
}

export default VideosList
