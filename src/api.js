import axios from 'axios';

const request = axios.create({
    baseURL: 'https://ck-nc-knews.herokuapp.com/api'
})

export const getTopics = async () => {
    const { data } = await request.get('/topics');
    return data.topics;
}

export const getArticles = async (topic, sort_by, order) => {
    const { data } = await request.get('/articles', { params: { topic, sort_by, order } });
    return data.articles;
}

export const getArticle = async (article_id) => {
    const { data } = await request.get(`/articles/${article_id}`);
    return data.article;
}

export const getComments = async (article_id) => {
    const { data } = await request.get(`/articles/${article_id}/comments`, { params: { sort_by: 'votes', order: 'desc' } });
    return data.comments;
}

export const postArticle = async (body) => {
    const { data } = await request.post(`/articles`, body);
    return data.article;
}

export const postComment = async (article_id, body) => {
    const { data } = await request.post(`/articles/${article_id}/comments`, body);
    return data;
}

export const postTopic = async (body) => {
    const { data } = await request.post('/topics', body);
    return data.topic;
}

export const deleteArticle = async (article_id) => {
    await request.delete(`/articles/${article_id}`);
}

export const deleteComment = async (comment_id) => {
    await request.delete(`/comments/${comment_id}`);
}

export const updateArticleVotes = async (article_id, inc_votes) => {
    await request.patch(`/articles/${article_id}`, { inc_votes })
}

export const updateCommentVotes = async (comment_id, inc_votes) => {
    await request.patch(`/comments/${comment_id}`, { inc_votes });
}

export const getUsers = async () => {
    const { data } = await request.get('/users')
    return data.users;
}

export const addUser = async (body) => {
    const { data } = await request.post('/users', body);
    return data.user;
}

export const getUser = async (username) => {
    const { data } = await request.get(`/users/${username}`);
    return data
}