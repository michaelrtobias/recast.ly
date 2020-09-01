var searchYouTube = (options, callback) => {
  // TODO
  var options = {
    q: q,
    maxResults: 5,
    key: 'AIzaSyAHyz-7XPtvuq8nOBdnnWPxo33jWHzd5Cs'
  };
  $.ajax({
    url: Parse.server,
    type: 'GET',
    data: JSON.stringify(options),
    contentType: 'application/json',
    success: callback,
    error: errorCB || function(error) {
      console.error('Failed to pos message', error);
    }
  });
};

export default searchYouTube;
