import React from 'react';
import YouTube from 'react-youtube';
 
class YouTubeVideo extends React.Component {

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.stopVideo();
      }

  render() {
    const opts = {
      height: '300',
      width: '500',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
 const {videoId}=this.props
    return (
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
 

}
export default YouTubeVideo