import React from 'react'
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../sidebar/Sidebar';
import './Home.css';

function Home() {
    return (
        <>
            <Header/>
            <div className="home">
                <Posts/>
                <Sidebar/>
            </div>
        </>
    )
}

export default Home
