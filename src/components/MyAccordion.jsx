import React from 'react'
import Data from './Data'
import {Accordion, Card}  from 'react-bootstrap'

export default function MyAccordion({fullName, gender,height,birth_year}) {
    return (
        <div>
{/*             <div className="row p-3 border mb-2 border">
                <Data fullName = {fullName}/>
                <Data gender = {gender}></Data>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    View more data
                </button>
            </div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <Data gender = {gender}></Data>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div> */}
                <Accordion defaultActiveKey="1">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                        <Data fullName = {fullName}/>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Data gender = {gender}></Data>
                            <Data height = {height}></Data>
                            <Data birth_year = {birth_year}></Data>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
        </div>

    )
}
