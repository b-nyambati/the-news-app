import React from 'react';
import TopHeadLines from '../../Components/TopHeadlines/TopHeadLines';
import Publications from '../../Components/Publications/Publications';
import "./Home.css"

const Home = () => {
    return(
        <div className="main">
            <h2>Top Headlines</h2>
            <TopHeadLines/>
            <h2>Publications</h2>
            <Publications/>
        </div>
    );
}

export default Home