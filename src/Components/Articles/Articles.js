import React, { Component } from 'react';
import Article from '../Article/Article'
import "./Articles.css"

class Articles extends Component {
    /*
        creating a unique key so articles mapping below doesn't get mad.
        It's just the index of the article.
    */
    getKey = (article) => {
        const articles = [...this.props.articlesFromMainComp]
        const keyOfArticle = articles.indexOf(article)
    
        return keyOfArticle;
    }


    render() { 
        return (
            <div className="articles-grid">
                {this.props.articlesFromMainComp.map(article => 
                    <Article key={this.getKey(article)} 
                        articleFromArticles={article}/> 
                )}
            </div>
        );
    }
}
 
export default Articles;