import React, { Component } from 'react';
import "./Article.css"
import axios from 'axios';
// import events from 'events'
import logo from '../../../src/logo.svg'
import LogoGetter from '../LogoGetter/LogoGetter';

class Article extends Component {
    state = {
        isLoaded: false,
        error: null,
        articleImage : [],
        sourceLogo : [],
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
        eg: July 2 2020 - Killer Mike
    */
    authorDate = () => {
        const articleDate = this.props.article.publishedAt
        const formatedArticleDate = this.formatDate(articleDate)
        let author = this.props.article.author

        author = author === "" ? null : author

        author = author === null ? 
            this.props.article.source.name : author

        return formatedArticleDate + " - " + author
    }

    /*
        Formats date. Retrieved as: YYYY-MM-DDTHH:MM:SSZ
        Formated to (month day, year). I forget what that format is caled but whatever.
    */
    formatDate = articleDate => {
        const month = articleDate[5] === 0 ? 
            this.state.months[Number(articleDate[6]) - 1] : 
            this.state.months[Number(articleDate.slice(5,7)) - 1]

        const day = articleDate.slice(8, 10)
        const year = articleDate.slice(0, 4)

        return month + " " + day + ", " + year
    }

    componentDidMount(){
        // Gets the current article's image.
        if(this.props.dom !== null){
            let imageUrl = 'https://cors-anywhere.herokuapp.com/' + this.props.article.urlToImage
            axios.get(imageUrl, {
                responseType: 'arraybuffer'}).then(res => {
                    let imageSource = new Buffer.from(res.data, 'binary').toString('base64')
                    imageSource = 'data:image/jpeg;base64,' + imageSource;
                    this.setState({
                        isLoaded: true,
                        articleImage: imageSource
                    })
                }, (error) => {this.setState({
                    isLoaded: true,
                    error
                })
            })
        }
    }

    // componentDidUpdate(){
    //     // Gets the current article's image.
    //     if(this.props.dom !== null){
    //         let imageUrl = 'https://cors-anywhere.herokuapp.com/' + this.props.article.urlToImage
    //         axios.get(imageUrl, {
    //             responseType: 'arraybuffer'}).then(res => {
    //                 let imageSource = new Buffer.from(res.data, 'binary').toString('base64')
    //                 imageSource = 'data:image/jpeg;base64,' + imageSource;
    //                 this.setState({
    //                     isLoaded : true,
    //                     articleImage: imageSource
    //                 })
    //             }, (error) => {this.setState({
    //                 isLoaded: true,
    //                 error
    //             })
    //         })
    //     }
    // }

    componentWillUnmount(){
        this.setState = (state,callback)=>{
            return;
        };
    }    

    render() { 
        return (
            <div className="article-grid">
                {/* <div className="image">
                    <img src={this.state.articleImage}/>
                </div> */}
                {/* <img className="logo" src={this.state.sourceLogo}/> */}
                <LogoGetter domain={this.props.dom}/>
                <h2 className="title">
                    {this.props.article.title}
                </h2>
                
                <div className="article-content">
                    <p>{this.props.article.description}</p>
                </div>

                <p className="author-date">
                    {this.authorDate()}
                </p>

            </div>
        );
    }
}
 
export default Article;