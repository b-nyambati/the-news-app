import React from 'react';
import { Link } from 'react-router-dom';
import TopHeadLines from '../../Components/TopHeadlines/TopHeadLines';
import Publications from '../../Components/Publications/Publications';

const Home = () => {
    return(
        <div>
            <h1>Home</h1>
            {/* <Link to="/publication"><p>Publication</p></Link>
            <Link to="/article"><p>Article</p></Link> */}
            <TopHeadLines/>
            <Publications/>
        </div>
    );
}

export default Home