import React, {Component} from 'react';
import { Preloader } from 'react-materialize';
import axios from 'axios';

import NewsList from './NewsList';

class Main extends Component {
    state = {
        allStories: []
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
          const top25IDs = top500IDs.data.slice(0,25)
          Promise.all(top25IDs.map((story, index) => {
            return fetchStory(story)
            .then(storyDetails => {
              return parseStory(storyDetails.data)
            })
          }))
          .then(stories => {
            const allStories = this.state.allStories
            stories.map(story => {
                story.source = "Hacker News"
              allStories.push(story)
            })
            this.setState({
              allStories
            })
          })
          .catch(err => console.error(err))
      }

      fetchTechCrunch = async () => {
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=http://feeds.feedburner.com/TechCrunch/')
        .then(results => {
          const stories = results.data.items
          const allStories = this.state.allStories
          stories.map(story => {
            story.source = "TechCrunch"
            allStories.push(story)
          })
          this.setState({
            allStories
        })
      })
        .catch(err => console.error(err))
    }
    
      fetchRedditProg = async () => {
        axios.get('https://www.reddit.com/r/programming/hot.json?sort=new')
        .then(posts => {
          const allStories = this.state.allStories
            const allPosts = posts.data.data.children
            allPosts.map(post => {
                post.data.source = "r/Programming"
                allStories.push(post.data)
            })
          this.setState({
              allStories
          })
        })
        .catch(err => console.error(err))
      }

      fetchRedditProgHum = async () => {
        axios.get('https://www.reddit.com/r/ProgrammerHumor/hot.json?sort=new')
        .then(posts => {
          const allStories = this.state.allStories
            const allPosts = posts.data.data.children
            allPosts.map(post => {
                post.data.source = "r/ProgrammingHumor"
                allStories.push(post.data)
            })
          this.setState({
              allStories
          })
        })
        .catch(err => console.error(err))
      }

      fetchRedditJS = async () => {
        axios.get('https://www.reddit.com/r/Javascript/hot.json?sort=new')
        .then(posts => {
          const allStories = this.state.allStories
            const allPosts = posts.data.data.children
            allPosts.map(post => {
                post.data.source = "r/Javascript"
                allStories.push(post.data)
            })
          this.setState({
              allStories
          })
        })
        .catch(err => console.error(err))
      }

      fetchRedditTech = async () => {
        axios.get('https://www.reddit.com/r/Technology/hot.json?sort=new')
        .then(posts => {
          const allStories = this.state.allStories
            const allPosts = posts.data.data.children
            allPosts.map(post => {
                post.data.source = "r/Technology"
                allStories.push(post.data)
            })
          this.setState({
              allStories
          })
        })
        .catch(err => console.error(err))
      }

      fetchMediumFCC = async () => {
          axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.freecodecamp.org/feed?truncated=true')
          .then(results => {
            const stories = results.data.items
            const allStories = this.state.allStories
            stories.map(story => {
                story.source = "FreeCodeCamp.org"
                allStories.push(story)
            })
            this.setState({
              sources: {
                  freeCodeCamp: {
                  stories
              }},
              allStories
          })
        })
          .catch(err => console.error(err))
      }

      fetchMediumHackerNoon = async () => {
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://hackernoon.com/feed?truncated=true')
        .then(results => {
          const stories = results.data.items
          const allStories = this.state.allStories
          stories.map(story => {
            story.source = "HackerNoon"
            allStories.push(story)
          })
          this.setState({
            sources: {
                hackerNoon: {
                stories
            }},
            allStories
        })
      })
        .catch(err => console.error(err))
    }

    fetchMediumCodeBurst = async () => {
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://codeburst.io/feed?truncated=true')
        .then(results => {
          const stories = results.data.items
          const allStories = this.state.allStories
          stories.map(story => {
            story.source = "codeburst.io"
            allStories.push(story)
          })
          this.setState({
            sources: {
                codeBurst: {
                stories
            }},
            allStories
        })
      })
        .catch(err => console.error(err))
    }
    
    async componentDidMount(){
        const { hackerNews, techCrunch, redditProg, redditProgHum, redditJS, redditTech, freeCodeCamp, hackerNoon, codeBurst } = this.props.location.state.sources
        if(hackerNews){
            this.fetchHackerNews();
        }
        if(techCrunch){
            this.fetchTechCrunch();
        }
        if(redditProg){
            this.fetchRedditProg();
        }
        if(redditProgHum){
            this.fetchRedditProgHum();
        }
        if(redditJS){
            this.fetchRedditJS();
        }
        if(redditTech){
            this.fetchRedditTech();
        }
        if(freeCodeCamp){
            this.fetchMediumFCC();
        }
        if(hackerNoon){
            this.fetchMediumHackerNoon();
        }
        if(codeBurst){
            this.fetchMediumCodeBurst();
        }
    }

    render() {
        const allStories = this.state.allStories;

        if(allStories.length === 0){
        return <div id="preload-text">
            <h3>Fetching stories...</h3>
            <Preloader size='big'/>
            </div>
        }
    
        return (
            <div className="main">
                <NewsList stories={allStories}/>
            </div>
        )
    }
}

export default Main;