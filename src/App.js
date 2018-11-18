// testing local ssh key

import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  BrowserRouter
} from 'react-router-dom'


// components
import Navigation from './components/Nagivation';
import NewsList from './components/NewsList';

function parseStory(story){
    const { id, title, url} = story
    return {
      id,
      title,
      url
    }
}

class App extends Component {

  state = {
    stories: null
  }


  

  async componentDidMount(){
    try {
      async function fetchStoryIDs(){
        return await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
      }
  
      async function fetchStory(storyID){
        return await axios.get(`https://hacker-news.firebaseio.com/v0/item/${storyID}.json`)
      }
  
      const top500IDs = await fetchStoryIDs();
      const storyIDs = top500IDs.data.slice(0,20)
      Promise.all(storyIDs.map((story, index) => {
        return fetchStory(story)
        .then(storyDetails => {
          return parseStory(storyDetails.data)
        })
      }))
      .then(stories => {
        const allStories = stories
  
      this.setState({
        stories: allStories
      })
      })
    } catch (e) {
      return new Error('error')
    }
    }
    



  render() {
    
    if(!this.state.stories) {
      return <h1>Loading stories...</h1> 
    } 

    const stories = this.state.stories

    return (
      <div className="App">
        {/* <BrowserRouter>
        <div>
          <Navigation routes={[
            {
              pathName: 'Home',
              uri: '/',
              state: this.state.stories
            },{
              pathName: 'Hacker News',
              uri: '/hackernews',
              state: this.state.stories
            },{
              pathName: 'Medium',
              uri: '/hackernews',
              state: this.state.stories
            },{
              pathName: 'Reddit',
              uri: '/reddit',
              state: this.state.stories
            }
          ]}/> 
          <Switch>
            <Route exact path="/" component={NewsList}/>
            <Route path="/hackernews" component={NewsList}/>
            <Route path="/medium" component={NewsList}/>
            <Route path="/reddit" component={NewsList}/>
          </Switch>
          <Navigation />
          </div>
        </BrowserRouter> */}
        <Navigation/>
        <NewsList stories={stories}/>
      </div>
    );
  }
}

export default App;
