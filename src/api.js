import axios from 'axios';

export const getTopics = () => {
    return axios.get('https://ck-nc-knews.herokuapp.com/api/topics')
}