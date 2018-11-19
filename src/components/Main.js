import React, {Component} from 'react';
import { Preloader } from 'react-materialize';
import axios from 'axios';
import {
    Route,
    Switch,
    BrowserRouter
  } from 'react-router-dom'

// import components
import Navigation from './components/Nagivation';
import NewsList from './components/NewsList';


class Main extends Component {
    state = {
        allStories: [],
        yCom: null,
        redditProg: null,
        redditProgHum: null,
      }
    
      fetchYCom = async () => {
        function fetchStoryIDs(){
          return axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
        }
        
        function fetchStory(storyID){
          return axios.get(`https://hacker-news.firebaseio.com/v0/item/${storyID}.json`)
        }
    
        function parseStory(story){
          const { id, title, url} = story
          return {
            id,
            title,
            url
          }
        }
    
        const top500IDs = await fetchStoryIDs();
          const top20IDs = top500IDs.data.slice(0,20)
          Promise.all(top20IDs.map((story, index) => {
            return fetchStory(story)
            .then(storyDetails => {
              return parseStory(storyDetails.data)
            })
          }))
          .then(stories => {
            const allStories = this.state.allStories
            stories.map(story => {
              allStories.push(story)
            })
            this.setState({
              yCom: stories,
              allStories
            })
          })
          .catch(err => console.error(err))
      }
    
      fetchReddit = async () => {
        function fetchProgramming(){
          return axios.get('https://www.reddit.com/r/programming/hot.json?sort=new')
        }
    
        function fetchProgrammerHumor(){
          return axios.get('https://www.reddit.com/r/ProgrammerHumor/hot.json?sort=new')
        }
    
        function reduceResult(result, allStories){
          const allPosts = result.data.data.children
          const postData = [];
          allPosts.map(post => {
            postData.push(post.data)
            allStories.push(post.data)
          })
          return {postData, allStories}
        }
    
        axios.all([fetchProgramming(), fetchProgrammerHumor()])
        .then(axios.spread((progPosts, progHumPosts) => {
          const allStories = this.state.allStories
          const redditProg = reduceResult(progPosts, allStories)
          const redditProgHum = reduceResult(progHumPosts, allStories)
          this.setState({
            redditProg,
            redditProgHum
          })
    
        }))
        .catch(err => console.error(err))
      }
    
      async componentDidMount(){
        try {
          this.fetchYCom();
          this.fetchReddit();
        } catch (e) {
          return new Error('error')
        }
      }

    render() {
        const yCom = this.state.yCom;
        const redditProg = this.state.redditProg;
        const redditProgHum = this.state.redditProgHum;
        const allStories = this.state.allStories;

        if(!yCom || !redditProg || !redditProgHum) {
        return <div id="preload-text">
            <h1>Fetching stories...</h1>
            <Preloader size='big'/>
            </div>
        }

    console.log(allStories)

        return (
            <div className="main">
                <BrowserRouter>
                    <div>
                    <Navigation/>
                        <Switch>
                        <Route exact path="/" render={()=>{
                            return <Sources/>
                        }}/>
                        <Route path="/main" render={()=>{
                            return this
                        }}/>
                        <Route path="/hackernews" render={()=>{
                            return <NewsList stories={yCom}/>
                        }}/>
                        <Route path="/reddit" render={()=>{
                            return <NewsList stories={redditProgHum}/>
                        }}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default Main;