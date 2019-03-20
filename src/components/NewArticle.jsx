import React, { Component } from 'react'

class NewArticle extends Component {
    render() {
        const {topics} = this.props
    return (
        <form action="" method="post" id="newArticle">
            <textarea id="newArticle-title" form_id="newArticle" />
            <textarea id="newArticle-body" form_id="newArticle" />
            <select>
                {topics.map(topic => {
                    return <option key={`topicselect-${topic.slug}`}value={topic.slug}>{topic.slug}</option>
                })}
            </select>
            <input type="submit" onClick={this.handleSubmit} value="post article"></input>
        </form>
    )
  }

    handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target.parentElement.children;
        const newArticle ={
            title: form[0].value,
            body: form[1].value,
            topic: form[2].value,
            author: this.props.user
        };
        console.log(newArticle)
}



}


export default NewArticle;