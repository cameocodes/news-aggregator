import React, {Component} from 'react';
import { Button, Card, Row, Col } from 'react-materialize';


class NewsStory extends Component {
    render() {
        const story = this.props.story
        return (
            <div class="col s12 m6 l4">
                <div class="card grey lighten-3">
                    <div class="card-content">
                    <span class="card-title">{story.title}</span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div class="card-action">
                    <a href={story.url}>Read</a>
                    </div>
                </div>
            </div>
        )
    }
  }

export default NewsStory;