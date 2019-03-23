import React from 'react';
import { Link } from '@reach/router';

const TopicsList = ({ topics }) => {
    return (
        <ul className="topicsList">
            <Link className="link" to="/">All Topics</Link>
            {topics.map((topic) => {
                return <Link className="link" style={{ color: `hsl(0, 0%, ${(+topic.article_count * 4) + 28}%)` }} key={topic.slug} to={`/${topic.slug}`}>{topic.slug}</Link>
            })}
        </ul>
    )
}

export default TopicsList;