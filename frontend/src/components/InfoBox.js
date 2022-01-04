//import React from 'react';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import entries from '../resources/blog.json';
import '../styles/InfoBox.css';

// We are going to import JSON below and run a script rendering 
// them into a flexbox list. Hopefully we can allow a filter via tag

const InfoBox = (props) => {
    const [tags, setTags] = useState([]);

        // Set the search tags from either props, or a component in here

    useEffect(() => {
        console.log(tags)
        // update display upon tag change
        // Order entries by tag
    })
    return (
        <Container id="InfoBox" className="bg-dark justify-content-center" >
            <Row id="InfoBoxes">
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