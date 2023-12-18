import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SubTitle, Title } from './components/styled/typeface';
import { Padding, Row } from './components/styled/layout';
import { Plain } from './components/styled/badges';
import { Table } from './components/data/Table';

function App() {
  return (
    <div>
      <Title>
        Title
      </Title>
      <Padding $left="1rem" $right="1rem">
        <SubTitle>
          <Row gap="0.5em">
            <Plain $color="#999dff" />
            Payout History
          </Row>
        </SubTitle>
      </Padding>
    </div>
  );
}

export default App;
