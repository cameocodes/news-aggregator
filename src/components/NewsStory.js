import React from 'react';


export default function NewsStory(props){
    const story = props.story

    return (
            <div className="pmd-card pmd-card-default pmd-z-depth">
                <a href={story.url || story.link} className="card-link">
                <div className="pmd-card-title">
                    <div className="media-body media-middle">
                        <div className="pmd-card-title-text card-title">{story.title}</div>
                        <span className="pmd-card-subtitle-text">{story.source}</span>
                    </div>
                </div>
                </a>
            </div>
    )
}