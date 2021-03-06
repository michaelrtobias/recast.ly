import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      video: exampleVideoData[0]
    };
    this.handleClick = this.handleClick.bind(this);

  }
  componentDidMount() {
    this.getYoutubeVideos('Cute puppies');
  }

  getYoutubeVideos(query) {
    var options = {
      //add api key
      key: this.props.APIKEY,
      query: query
    };
    searchYouTube(options, (value) => {
      this.setState({
        videos: value.items,
        video: value.items[0]
      });
    });
  }
  handleClick (e) {
    this.setState({
      video: e
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em> <VideoPlayer video= {this.state.video}/></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em> <VideoList clicker={this.handleClick} videos={this.state.videos} /> </h5></div>
          </div>
        </div>
      </div>
    );
  }
}
// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em> <VideoPlayer video= {exampleVideoData[0]}/></h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em> <VideoList videos={exampleVideoData} /> </h5></div>
//       </div>
//     </div>
//   </div>
// );



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
