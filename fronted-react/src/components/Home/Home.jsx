import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import Carousel from "../Carousel/Carousel";
import Noticias from '../News/News';
import Lastgames from '../LastGames/Lastgames';
import ExpectedGames from '../ExpectedGames/ExpectedGames';
import Recommendeds from '../Recommendeds/Recommendeds';
import LastUsers from '../LastUsers/LastUsers';

class Home extends Component {
    render(){
        return(
            <Container className="padre">
                <Carousel />
                <Noticias />
                <Lastgames />
                <ExpectedGames />
                <Recommendeds />
                <LastUsers />
            </Container>
        )
    }
};

export default Home;