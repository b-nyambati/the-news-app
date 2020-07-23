import React, { Component } from 'react';
import Article from '../Article/Article'
import "./Articles.css"

class Articles extends Component {
    // state = {
    //     isLoaded: false
    // }
    // // _isMounted = false;

    // componentDidMount(){
    //     this.setState({isLoaded: true})
    // }

    // componentWillUnmount(){
        
    // }

    testFunc = (articleUrl) => {
        return this.props.domainGetter(articleUrl)
    }

    render() { 
        return (
            <div className="articlesgrid">
                {this.props.articles.map(article => 
                    <Article key={this.props.getKeys(article)}
                        article={article} 
                        dom={this.testFunc(article.url)}>
                    </Article>
                )}
            </div>
        );
    }
}
 
export default Articles;