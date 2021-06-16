import React from 'react'
import {Accordion, Card}  from 'react-bootstrap'
import '../App.css';

export default function MyAccordion({fullName, gender,height,birth_year}) {
    return (
        <div className="p-2 m-2">           
                    <Accordion defaultActiveKey="1" >                  
                        <Card className="text-center text-white " id="my_accordion">
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                            <strong>{fullName}</strong>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <p><strong>Gender: </strong>{gender}</p>
                                <p><strong>height: </strong>{height}</p>
                                <p><strong>Birth Year: </strong>{birth_year}</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>                
        </div>

    )
}
