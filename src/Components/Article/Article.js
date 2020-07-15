import React, { Component } from 'react';
import "./Article.css"

class Article extends Component {
    state = {
        articleImage : [],
        months: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ]
    }

    /*
        returns author and date in this format {month day year . first name last name}
        eg: July 2 2020 . Killer Mike
    */
    authorDate = () => {
        const articleDate = this.props.articleFromArticles.publishedAt;
        const author = this.props.articleFromArticles.author;

        const formatedArticleDate = this.formatDate(articleDate)
        return formatedArticleDate + " - " + author
    }

    /*
        Formats date. Retrieved as: YYYY-MM-DDTHH:MM:SSZ
        Formated to (month day, year). I forget what that format is caled but whatever.
    */

    formatDate = articleDate => {
        const month = articleDate[5] == 0 ? 
            this.state.months[articleDate[6]] : 
            this.state.months[articleDate.slice(5,7)]

        const day = articleDate.slice(8, 10)
        const year = articleDate.slice(0, 4)

        return month + " " + day + ", " + year
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
                <h2 className="title">
                    {this.props.articleFromArticles.title}
                </h2>
                
                <div className="article-content">
                    <p>{this.props.articleFromArticles.content}</p>
                </div>

                <p className="author-date">
                    {this.authorDate()}
                </p>

            </div>
        );
    }
}
 
export default Article;