import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import delta from '../images/delta.png';
import jeIcon from '../images/jeIcon.png';
import bg from '../images/headline_bg.jpg';

function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'center',
        backgroundImage: `url(${bg})`,
        opacity: 0.9,
        minHeight: '90vh',
        objectFit: 'cover',
      }}
    >
      <Container style={{ margin: '0 auto' }}>
        <Row>
          <Col xs="12" md="2" style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src={jeIcon}
              alt="Lodge icon"
              style={{
                margin: '0 auto',
                width: '150px',
                height: '150px',
                marginRight: 'auto',
                filter: 'contrast(2)',
              }}
            />
          </Col>
          <Col
            md="8"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'center',
              textAlign: 'center',
              margin: 'auto',
              color: 'white',
            }}
          >
            <h1 style={{ fontSize: '54px' }}>Достойна ложа</h1>
            <h1 style={{ fontSize: '54px' }}>"Паломники до Країни Сходу"</h1>
            <h1> регулярно заснована Великою Ложею України</h1>
            <h1> на Сході м. Запоріжжя під номером 17</h1>
          </Col>
          <Col xs="12" md="2" style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src={delta}
              alt="Delta"
              style={{ margin: '0 auto', width: '145px', height: '145px' }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
