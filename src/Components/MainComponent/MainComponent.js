import React, { Component } from 'react';
import "./MainComponent.css"
import NavBar from '../NavBar/NavBar'
import axios from 'axios';
import Articles from '../Articles/Articles';
import SideNav from '../SideNav/SideNav';

const API_KEY = "5fccb1c1767c4599890e00189ba1e869" // <<< use your own api key >>> //

class MainComponent extends Component {
    state = {
        isLoaded: false,
        error: null,
        articles: [],
        sidenavArticleDomains: []
    }

    componentDidMount(){
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + API_KEY)
        .then((response) => {
            let filteredList = this.filterNullContent(response.data.articles)
            
            let articleDomains = this.setSideNavArticleDomains(filteredList)
            
            this.setState({
                isLoaded : true,
                articles: filteredList,
                sidenavArticleDomains : articleDomains
            })
        }, (error) => {this.setState({
                isLoaded: true,
                error
            })
        })
    }

    setSideNavArticleDomains = (filteredListOfArticles) => {
        let articleDomains = []
        console.log(typeof(filteredListOfArticles[0]))
        filteredListOfArticles.forEach(fa => {
            let domain = this.getDomain(fa.url)

            if(articleDomains.indexOf(domain) < 0)
                articleDomains.push(domain)
        })

        console.log(typeof(articleDomains[0]))
        return articleDomains
    }

    // Returns domain of an article
    getDomain = (articleUrl) => {
        let logoParam = articleUrl.slice(8)
        logoParam = logoParam.slice(0, logoParam.indexOf('/')).slice(4)
        
        return logoParam
    }

    // Requests an article by domain
    getArticlesByDomain = (articleDomain) => {
        axios.get('https://newsapi.org/v2/everything?language=en&domains=' + articleDomain + '&apikey=' + API_KEY)
        .then((response) => {
            let filteredList = this.filterNullContent(response.data.articles)
            this.setState({
                isLoaded: true,
                articles: filteredList
            })
        }, (error) => {this.setState({
                isLoaded: true,
                error
            })
        })
    }

    componentWillUnmount(){
        this.setState = (state,callback)=>{
            return;
        };
    }

    // Filtering out all articles that come back with "null" content and returning the filtered list
    filterNullContent = (retrievedArticles) => {
        let filteredList = []

        retrievedArticles.forEach(article => {
            if(article.content !== null){
                filteredList.push(article)
            }
        });

        return filteredList
    }



    /*
        creating a unique key so articles mapping below doesn't get mad.
        It's just the index of the article.
    */
    getKey = (articleObjectOrDomain) => {
        const articles = this.state.articles
        const sidenavArticleDomains = this.state.sidenavArticleDomains

        let keyOfItem = typeof(articleObjectOrDomain) === 
            typeof(articles[0]) ? articles.indexOf(articleObjectOrDomain) : sidenavArticleDomains.indexOf(articleObjectOrDomain)

        return keyOfItem;
    }

    render() { 
        const {error, isLoaded, articles} = this.state;
        return (
            <div className="container">
                <NavBar/>
                <SideNav getKeys={this.getKey}
                        articleDomains={this.state.sidenavArticleDomains}
                        // articles={articles}
                        onIconClicked={this.getArticlesByDomain}/>
                <div className="body">
                    <Articles getKeys={this.getKey}
                        articles={articles}
                        domainGetter={this.getDomain}
                        articleDomains={this.state.sidenavArticleDomains}/>
                </div>
            </div>

        );
    }
}
 
export default MainComponent;