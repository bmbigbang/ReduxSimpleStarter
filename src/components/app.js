import React, { Component } from 'react'

import SearchBar from '../containers/search_bar'
import PostsList from '../containers/posts_list'

export default class App extends Component {
   render() {
       return (
           <div>
               <SearchBar/>
               <PostsList/>
           </div>
       );
   }
}
