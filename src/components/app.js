import React, { Component } from 'react'
import ScrollArea from 'react-scrollbar'

import SearchBar from '../containers/search_bar'
import PostsList from '../containers/posts_list'
import WordTable from '../containers/word_table'
import WordChart from '../containers/word_chart'


export default class App extends Component {
   render() {
       return (
           <div>
               <SearchBar/>
               <ScrollArea
                   speed={0.8}
                   className="scroll-area"
                   contentClassName="posts-list"
                   horizontal={false}
               >
                   <div><PostsList/></div>
               </ScrollArea>
               <div id='right-container'>
                   <WordTable/>
                   <WordChart/>
               </div>
           </div>
       );
   }
}
