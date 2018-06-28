import React, {Component} from 'react';
import NewsStory from './NewsStory';
import { Button, Icon, Card, Row, Col } from 'react-materialize';


class NewsList extends Component {
    render() {
        const stories = this.props.stories
        return (
            <div className="row">
                { stories.map(story => {
                    return <NewsStory key={story.id} story={story}/>
                })}
            </div>
        )
    }
}

export default NewsList;