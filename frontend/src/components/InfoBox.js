//import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import entries from '../resources/blog.json';
import '../styles/InfoBox.css';

// We are going to import JSON below and run a script rendering 
// them into a flexbox list. Hopefully we can allow a filter via tag

const InfoBox = () => {
    return (
        <Container id="InfoBox" className="bg-dark justify-content-center" >
            <Row>
                <h2 className="text-center">Wild Fire Health and Safety Websites</h2>
                {entries.map(entry => (
                    <Card className="myCard text-dark" md='auto' lg='auto'> 
                        <Card.Header>
                            <a myLink href={entry.url[0]} 
                                className="lead rounded text-center">{entry.title} </a>
                        </Card.Header>
                        <Card.Subtitle className="mb-2">
                            <br />
                            {entry.short}
                        </Card.Subtitle>
                    </Card>
                ))}
            </Row>
        </Container>
    );
}
export default InfoBox;

/**************TODO ******************
 * 1. Configure Map to work in bootstrap grid
 *  -> the widths don't match up between top bar and map
 *  -> The info box is hidden behind the map
 */