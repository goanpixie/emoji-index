import React from 'react';
import {ThemeProvider} from 'styled-components';
import { colorsDark } from 'styles/palette';
import { Wrapper, Title } from './style';
// import List from 'components/List';

function App() {
  return (
    <ThemeProvider theme={colorsDark}>
      <div>
        <Wrapper>
          <Title>
            Emoticon Index
          </Title>
          {/* <List/> */}
        </Wrapper>
      </div>
    </ThemeProvider>

  );
}

export default App;
