var searchYouTube = ({key, query, max = 5}, callback) => {

  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done((items) => {
      if (callback) {
        callback(items);
      }
    });
  // .failed(({responseJSON}) => {
  //   console.log(responseJSON);
  // });
};

export default searchYouTube;
