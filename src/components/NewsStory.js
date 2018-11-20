import React, {Component} from 'react';


class NewsStory extends Component {
    render() {
        const story = this.props.story

        return (
                <div className="pmd-card pmd-card-default pmd-z-depth">
                    <a href={story.url || story.link} className="card-link">
                    <div className="pmd-card-title">
                        <div className="media-body media-middle">
                            <h6 className="pmd-card-title-text">{story.title}</h6>
                            <span className="pmd-card-subtitle-text">{story.source}</span>
                        </div>
                    </div>
                    </a>
                </div>
        )
    }
  }

export default NewsStory;