import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import GameInfo from '../GameInfo/GameInfo';
import GameComment from '../GameComment/GameComment';

class Game extends Component {
    render(){
        return(
            
            <Container className="padre">
                <GameInfo />
                <GameComment />
            </Container>
        )
    }
};

export default Game;