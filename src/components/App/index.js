import React from 'react';
import {ThemeProvider} from 'styled-components';
import { colorsDark } from 'styles/palette';
import { Wrapper, Title } from './styles';
import List from 'components/List';
import Emodex from 'emoji-datasource';

function App() {
  console.log("Emodex-->", Emodex)

  return (
    <ThemeProvider theme={colorsDark}>
      <div>
        <Wrapper>
          <Title>
            Emoticon Index
          </Title>
          <List emodex={Emodex} />
        </Wrapper>
      </div>
    </ThemeProvider>

  );
}

export default App;
