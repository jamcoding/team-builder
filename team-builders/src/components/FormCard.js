import React from "react";
import { Container, Row, Col, Card, CardBody, CardText } from "reactstrap";

const FormCard = props => {
    return (
        <Row>
            <Container>
                <Col>
                    {props.members.map(member => (
                        <Card key={member.id}>
                            <CardBody>
                                <CardText>{member.name}</CardText>
                                <CardText>{member.email}</CardText>
                                <CardText>{member.role}</CardText>
                            </CardBody>
                        </Card>
                    ))}
                </Col>
            </Container>
        </Row>
    )
}

export default FormCard;
