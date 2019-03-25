import React from 'react';
import { Router } from '@reach/router';
import ArticleList from './ArticleList';
import Article from './Article';
import NewArticle from './NewArticle';
import NewTopic from './NewTopic';
import SignUp from './SignUp';
import Error from './Error';
import TopicsList from './TopicsList';

const MainContent = (props) => {
  const { topics, user, updateTopics, setUser, topic } = props
  return (
    <Router>
      <Article path="/articles/:article_id" user={user} />
      <TopicsList path="/topics" topics={topics} />
      <NewArticle path="/new-article" topics={topics} user={user} />
      <NewTopic path="/new-topic" user={user} updateTopics={updateTopics} />
      <SignUp path="/sign-up" setUser={setUser} />
      <ArticleList path="/" topic={topic} user={user} updateHeader={props.updateHeader} />
      <ArticleList path="/articles" topic={topic} user={user} updateHeader={props.updateHeader} />
      <Error path="/error" default />
    </Router>
  )
}


export default MainContent;
