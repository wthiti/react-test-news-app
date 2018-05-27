import React from 'react';
import moment from 'moment';
import { Panel, Image, Row, Col } from 'react-bootstrap';

function formatDateFromString(s) {
  const displayDateTime = moment(s);
  return displayDateTime.format("MMM D, HH:mm");
}

export default props => {
  return (
    <Panel>
      <Panel.Heading>{props.title}</Panel.Heading>
      <Panel.Body>
        <Row>
          <Col xs={6} md={12}>
            <Image src={props.image} alt="" responsive />
          </Col>
          <Col xs={6} md={12}>
            <p>{props.text}</p>
            <p>Updated: {formatDateFromString(props.updated)}</p>
          </Col>
        </Row>
      </Panel.Body>
    </Panel>
  )
}
