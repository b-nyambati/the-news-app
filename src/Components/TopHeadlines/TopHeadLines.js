import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_KEY = process.env.REACT_APP_NEWS_API_ORG_API_KEY

const TopHeadLines = () => {

    const [headLines, setHeadLines] = useState([])

    useEffect(() => {
        fetchTopHeadLines()
    }, []);

    const fetchTopHeadLines = () => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + API_KEY)
        .then((response) => {
            let articlesObject = response.data
            console.log(articlesObject.articles)
            setHeadLines(articlesObject.articles)
        })
    }

    /*
        Returns a cleaner/more readable string to be displayed in the url/path to article.
            from: this%is%the%title
            to: this-is-the-title 
    */
    const AddDashesToTitle = (headLineTitle) => {
        headLineTitle = headLineTitle.replace(/ /g, "-")
        return headLineTitle
    }

    return (
        <div className="headlines">
            {headLines.map((headLine, index) => (
               <Link to={`/article/${AddDashesToTitle(headLine.title)}`} key={index}>
                   <p>{headLine.description}</p>
               </Link>

            ))}
        </div>
    );
}
 
export default TopHeadLines;