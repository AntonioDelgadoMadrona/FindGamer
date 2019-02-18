import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import HomeCarousel from "../HomeCarousel/HomeCarousel";
import HomeNews from '../HomeNews/HomeNews';
import HomeLastGames from '../HomeLastGames/HomeLastGames';
import HomeExpectedGames from '../HomeExpectedGames/HomeExpectedGames';
import HomeRecommendeds from '../HomeRecommendeds/HomeRecommendeds';
import HomeLastUsers from '../HomeLastUsers/HomeLastUsers';

class Home extends Component {

    

    render(){
        
        return(
            <Container className="padre">
                <HomeCarousel />
                <HomeNews />
                <HomeLastGames />
                <HomeExpectedGames />
                <HomeRecommendeds />
                <HomeLastUsers />
            </Container>
        )
    }
};

export default Home;