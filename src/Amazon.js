import React, { Component } from 'react'

const api_yt_srch_url = 'https://www.googleapis.com/youtube/v3/search?'
const api_yt_key_prop = 'key='
const api_yt_key = 'AIzaSyBwnNqbRoNVMBvT6_8VY4pJ7pYzwAh6QAk'

const type_prop = 'type='
const type = 'video'
const result_prop = 'maxResults='
const result = 5
const query_prop = 'q='
var query = 'Amazon'
const obj_prop = 'part='
const obj = 'snippet'
const yt_embed_url = 'https://www.youtube.com/embed/'

var yt_URL = `${api_yt_srch_url}${api_yt_key_prop}${api_yt_key}&${
   query_prop
   }${encodeURI(query)}&${type_prop}${type}&${result_prop}${result}&${obj_prop}${
   obj
   }`

class Amazon extends Component {
   //construct an array to keep the data
   constructor(props) {
      super(props)
      this.state = {
         yt_results: []
      }
      //bind the array
      this.clicked = this.clicked.bind(this)
   }
   clicked() {
      //console.log('clicked');
      fetch(yt_URL)
      .then(response => response.json())
      .then(responseJson => {
         //return responseJson.movies;
         //console.log(responseJson);
         //map will loop through the array
         const yt_results = responseJson.items.map(
            obj => yt_embed_url + obj.id.videoId
         )
         //save it to this state
         this.setState({ yt_results })
         console.log(responseJson)
      })
      .catch(error => {
         console.error(error)
      })
   }

   render() {
      //log the url to the console
      /*console.log(finalURL);
        console.log(this.state.amz_results);
        console.log(encodeURI(query));*/
      return (
         <div>
            <button onClick={this.clicked}>Get {query} Videos</button>
            {/*rotate through the array
                        console.log(link);*/}
            {this.state.yt_results.map((link, i) => {
               // div needs a unique key
               var frame = (
                  <div className="youtube" key={i}>
                     <iframe
                        width="560"
                        height="315"
                        title="abc"
                        src={link}
                        frameBorder="0"
                        allowFullScreen
                     />
                  </div>
               )
               return frame
            })}
            {this.frame}
         </div>
      )
   }
}

export default Amazon
