const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/charutha-antoine';

  const getItems = function(callback) {
    return callback('api module works!');
  }

  return {
    getItems
  }

}()
)