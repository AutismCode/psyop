import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <Container fluid className="landing-page">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1 className="headline">Your Headline Here</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <img src="your-image-url-here" alt="Psyops Theme" className="image" />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <p className="paragraph">
            Your paragraph text here. Use this space to describe your project
            and provide any necessary information.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
