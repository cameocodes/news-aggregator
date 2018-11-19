import React, {Component} from 'react';
import NewsStory from './NewsStory';


class NewsList extends Component {
    render() {
        const stories = this.props.stories

        return (
            <div className="news-list">
                {stories.map((story, id) => {
                    return <NewsStory key={id} story={story}/>
                })}
            </div>
        )
    }
}

export default NewsList;