import React, {Component} from 'react';
import { Preloader } from 'react-materialize';
import axios from 'axios';

import NewsList from './NewsList';

class Main extends Component {
    state = {
        allStories: [],
        sources: {
            hackerNews: {
                source: false,
                stories: null
            },
            redditProg: {
                source: false,
                stories: []
            },
            redditProgHum: {
                source: false,
                stories: []
            },
            redditJS: {
                source: false,
                stories: []
            },
            freeCodeCamp: {
                source: false,
                stories: []
            },
            hackerNoon: {
                source: false,
                stories: []
            },
            codeBurst: {
                source: false,
                stories: []
            }
        }
      }
    
      fetchHackerNews = async () => {
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
              sources: {
                  hackerNews: {
                  stories
              }},
              allStories
            })
          })
          .catch(err => console.error(err))
      }
    
      fetchRedditProg = async () => {
        function fetchProgramming(){
          return axios.get('https://www.reddit.com/r/programming/hot.json?sort=new')
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
    
        axios.all([fetchProgramming()])
        .then(axios.spread((progPosts) => {
          const allStories = this.state.allStories
          const redditProg = reduceResult(progPosts, allStories)
          this.setState({
              sources: {
                redditProg: {
                    stories: redditProg
                },
              }
          })
        }))
        .catch(err => console.error(err))
      }

      fetchRedditProgHum = async () => {
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
    
        axios.all([fetchProgrammerHumor()])
        .then(axios.spread((progHumPosts) => {
          const allStories = this.state.allStories
          const redditProgHum = reduceResult(progHumPosts, allStories)
          this.setState({
              sources: {
                redditProgHum: {
                    stories: redditProgHum
                }
              }
          })
        }))
        .catch(err => console.error(err))
      }
    
    async componentDidMount(){
        const { hackerNews, redditProg, redditProgHum, redditJS, freeCodeCamp, hackerNoon, codeBurst } = this.props.location.state.sources
        if(hackerNews){
            this.setState({
                sources: {
                    hackerNews: {
                        source: true
                    }
                }
            })
            this.fetchHackerNews();
        }
        if(redditProg){
            this.setState({
                sources: {
                    redditProg: {
                        source: true
                    }
                }
            })
            this.fetchRedditProg();
        }
        if(redditProgHum){
            this.setState({
                sources: {
                    redditProgHum: {
                        source: true
                    }
                }
            })
            this.fetchRedditProgHum();
        }
    }

    render() {
        const allStories = this.state.allStories;

        if(allStories.length == 0){
        return <div id="preload-text">
            <h3>Fetching stories...</h3>
            <Preloader size='big'/>
            </div>
        }
    
        console.log(allStories)
        return (
            <div className="main">
                <NewsList stories={allStories}/>
            </div>
        )
    }
}

export default Main;