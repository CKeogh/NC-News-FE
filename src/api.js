import axios from 'axios';

const request = axios.create({
    baseURL: 'https://ck-nc-knews.herokuapp.com/api'
})

export const getTopics = async () => {
    const { data } = await request.get('/topics');
    return data.topics;
}

export const getArticles = async (topic) => {
    const { data } = await request.get('/articles', {params: { topic }});
    return data.articles
}

export const getArticle = async (article_id) => {
    const { data } = await request.get(`/articles/${article_id}`);
    return data.article;
}

export const getComments = async (article_id) => {
    const { data } = await request.get(`/articles/${article_id}/comments`);
    return data.comments;
}