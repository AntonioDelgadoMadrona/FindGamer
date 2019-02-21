import React, { Component } from 'react';

import { Container, Row } from 'react-bootstrap';

import Timeline from '../CommunityTimeline/CommunityTimeline';
import ActiveUsers from '../CommunityActiveUsers/CommunityActiveUsers';

class Community extends Component {
    render(){
        return(
            <Container className="padre">
               <Container className="hijo">
                    <Row className="justify-content-between">

                        <Timeline />
                        {/* <ActiveUsers /> */}

                    </Row>
                </Container>
            </Container>
        )
    }
};

export default Community;