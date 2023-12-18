import React, { useCallback, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { StatusChip, SubTitle, TableItem, Title, ValueItem } from './components/styled/typeface';
import { Body, Padding, Row } from './components/styled/layout';
import { Plain } from './components/styled/badges';
import { RemoteTable } from './components/data/Table';
import { useDebouncer } from './hooks/useDebouncer';
import { Input } from './components/styled/input';

function App() {

  const defaultPayoutUrl = 'https://theseus-staging.lithium.ventures/api/v1/analytics/tech-test/payouts'
  const headers: {} = { 'Date & Time': 'dateAndTime', 'User': 'username', 'Status': 'status', 'Value': 'value' }

  const [payoutApiUrl, setPayoutApiUrl] = useState(`${defaultPayoutUrl}`);

  const debounce = useDebouncer(500, (query: string) => {
    if (query) {
      setPayoutApiUrl(() => `${defaultPayoutUrl}?query=${query}`)
    } else {
      setPayoutApiUrl(() => defaultPayoutUrl)
    }
  });

  const getCellValue = useCallback((value: any, key: string) => {
    switch (key) {
      case 'status':
        return <StatusChip status={value}><TableItem>{value}</TableItem></StatusChip>
      case 'dateAndTime':
        const formattedDate = new Date(value).toLocaleString("en-US", { weekday: "short", month: "short", day: "numeric" });
        return <TableItem>{formattedDate}</TableItem>
      case 'username':
        return <TableItem>{value}</TableItem>
      case 'value':
        return <ValueItem>{value}</ValueItem>
    }

    return <></>
  }, []);

  return (
    <Body>
      <Title>
        Payouts
      </Title>
      <Padding $left="1rem" $right="1rem">
        <SubTitle>
          <Row gap="0.5em">
            <Plain $color="#999dff" />
            Payout History
          </Row>
        </SubTitle>
        <Input onChange={(e) => debounce(e.target.value)} placeholder='Search' type='search' />
        <RemoteTable
          enablePagination
          headers={Object.keys(headers)}
          headersMapping={headers}
          url={payoutApiUrl}
          cell={getCellValue}
        />
      </Padding>
    </Body>
  );
}

export default App;
