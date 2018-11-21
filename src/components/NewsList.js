import React from 'react';
import NewsStory from './NewsStory';


export default function NewsList(props) {
    const stories = props.stories;
    function randomizeStories(stories) {
        for (let i = stories.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [stories[i], stories[j]] = [stories[j], stories[i]];
        }
    }

    randomizeStories(stories)
    
    return (
        <div className="news-list">
            {stories.map((story, id) => {
                return <NewsStory key={id} story={story}/>
            })}
        </div>
    )
}