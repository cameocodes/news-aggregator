import React, {Component} from 'react';


class NewsStory extends Component {
    render() {
        const story = this.props.story

        return (
            <div className="col s12 m12 l12">
            <a href={story.url || story.link}>
                <div className="card grey lighten-5">
                    <div className="card-content">
                        <span className="card-title">{story.title}</span>
                    </div>
                </div>
                </a>
            </div>
        )
    }
  }

export default NewsStory;