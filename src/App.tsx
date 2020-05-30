import React from 'react';

import GlobalStyle from './styles/global';

import Requisition from './components/Requisition';
import RequisitionContainer from './components/RequisitionContainer';

type Requisition = {
  url: string;
  method: string;
};

type Routes = {
  name: string;
  routes: Requisition[];
};

type Config = {
  routes: Routes[];
};

type AppProps = {
  config: Config;
};

const App: React.FC<AppProps> = ({ config }) => {
  return (
    <>
      <GlobalStyle />

      {config.routes.map((subject, indexSubject) => (
        <RequisitionContainer key={indexSubject} title={subject.name}>
          {subject.routes.map((route, indexRoute) => (
            <Requisition
              url={route.url}
              method={route.method}
              key={indexRoute}
            />
          ))}
        </RequisitionContainer>
      ))}
    </>
  );
};

export default App;
