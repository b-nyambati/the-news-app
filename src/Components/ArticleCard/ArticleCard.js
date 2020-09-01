import React from 'react';
import "./ArticleCard.css"

const ArticleCard = ({article}) => {
    const articleAuthor = article.author
    // const articleSource = article.source.name
    const articleTitle = article.title
    const publishDate = article.publishedAt
    const description = article.description
    
    return (
        <div className="article-card">
            <h3 className="title">{articleTitle}</h3>
            <p className="description">{description}</p>
            <p className="author">{articleAuthor}</p>
            <p className="date">{publishDate}</p>
        </div>
    );
}
 
export default ArticleCard;