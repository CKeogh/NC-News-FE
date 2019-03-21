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
  return (
    <Router>
      <TopicsList path="/topics" topics={props.topics} />
      <NewArticle topics={props.topics} user={props.user} path="/new-article" />
      <NewTopic path="/new-topic" updateTopics={props.updateTopics} />
      <SignUp path="/sign-up" users={props.users} setUser={props.setUser} />
      <ArticleList path="/" topic={props.topic} user={props.user} />
      <Article path="/articles/:article_id" user={props.user} />
      <Error defaulted path="/error" />
    </Router>
  )
}


export default MainContent;
