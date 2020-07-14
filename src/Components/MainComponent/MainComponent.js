import React, { Component } from 'react';
import "./MainComponent.css"

import axios from 'axios';
import Articles from '../Articles/Articles';

class MainComponent extends Component {
    state = {
        articles: []
    }

    componentDidMount(){
        axios.get("http://newsapi.org/v2/everything?q=null&apikey=5fccb1c1767c4599890e00189ba1e869")
        .then((response) => {
            console.log(response.data.articles)
            this.setState({articles: response.data.articles})
        })
    }

    render() { 
        return (
            <div>
                <Articles articlesFromMainComp={this.state.articles}/>
            </div>
        );
    }
}
 
export default MainComponent;