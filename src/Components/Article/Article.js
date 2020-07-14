import React, { Component } from 'react';
import "./Article.css"
import axios from 'axios';
import { string } from 'yargs';

class Article extends Component {
    state = {
        articleImage : []
    }

    /*
        returns author and date in this format {month day year . first name last name}
        eg: July 2 2020 . Killer Mike
    */
    authorDate = () => {
        const articleDate = this.props.articleFromArticles.publishedAt;
        const author = this.props.articleFromArticles.author;

        return articleDate + " . " + author
    }

    // getArticleImage = () => {
    //     if(this.props.articleFromArticles.urlToImage != null){
    //         axios.get("http://localhost:3000/" + this.props.articleFromArticles.urlToImage, {responseType: 'arraybuffer'})
    //             .then((response) => {
    //                 const buffer = Buffer.from(response.data, 'base64')
    //                 console.log(buffer)
    //                 // this.setState({articleImage: buffer})
    //                 // this.setState({articleImage: buffer})
    //                 // console.log(response.data)
    //                 // this.setState({articles: response.data.articles})
    //         })
    //     }
        
    // }

    render() { 
        return (
            <div className="article-grid">
                {/* <div className="image">
                    {this.props.articleFromArticles.urlToImage}
                </div> */}

                <div className="article-content">
                    <p>{this.props.articleFromArticles.content}</p>
                </div>

                <h2 className="title">
                    {this.props.articleFromArticles.title}
                </h2>

                <p className="author-date">
                    {this.authorDate()}
                </p>

            </div>
        );
    }
}
 
export default Article;