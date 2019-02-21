import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import GameInfo from '../GameInfo/GameInfo';
// import GameComment from '../GameComment/GameComment';
import GameScreenshoots from '../GameScreenshoots/GameScreenshoots';

class Game extends Component {
    render(){
        return(
            
            <Container className="padre">
                <GameInfo />
                {/* <GameScreenshoots /> */}
                {/* <GameComment /> */}
            </Container>
        )
    }
};

export default Game;