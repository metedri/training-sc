import React from 'react';
import { Card } from './components/Card.styled';
import { Button } from './components/Button.styled';
import { CadrdImage } from './components/CardImage.styled';
import { CadrdTitle } from './components/CardTitle.styled';
import { CardDiscription } from './components/CardDiscription.styled';
import styled from 'styled-components';
import { myTheme } from './styles/Theme.styled';

function App() {
  return (
    <div>
      <Card>
        <CadrdImage src='./images/rectangle.png'/>
        <CadrdTitle>Headline</CadrdTitle>
        <CardDiscription>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</CardDiscription>
        <Box>
          <Button primary color={myTheme.colors.blue}>See more</Button>
          <Button outlined color={myTheme.colors.blue}>Save</Button>
        </Box>
      </Card>
    </div>
  );
}

export default App;

const Box =styled.div`
  padding-top: 9px;
  padding-left: 20px;
  display: flex;
  gap: 12px;
`
