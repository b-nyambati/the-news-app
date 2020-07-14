import React, { Component } from 'react';

class Article extends Component {
    render() { 
        return (
            <div>
                {this.props.articleFromArticles.source.name}
            </div>
        );
    }
}
 
export default Article;