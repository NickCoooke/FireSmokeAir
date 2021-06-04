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
        <Container id="InfoBox" className="bg-dark">
            <Row>
                <h2 className="text-center">Wild Fire Health and Safety Resources </h2>
                {entries.map(entry => (
                    <Card className="myCard" md='auto'> 
                        <Card.Title className="text-black">{entry.title}</Card.Title>
                        <Card.Subtitle className="mb-2">
                            {entry.short}
                        </Card.Subtitle>
                        <Card.Link href={entry.url[0]} className="btn-warning rounded border" >
                            {entry.title}
                        </Card.Link>
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