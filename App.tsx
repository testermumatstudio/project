import  React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import MainAppRoutes from '@navigation/routes';


import { MoralisProvider } from "react-moralis";
import { serverUrl, appId } from '@config/moralis-connect';

import {AppContextProvider} from '@context/AppContextProvider';

export default function App() {

  return (

    <React.StrictMode>
      <MoralisProvider appId={appId} serverUrl={serverUrl}>
        <AppContextProvider>
          <Router>
            <MainAppRoutes/>
          </Router>
        </AppContextProvider>
      </MoralisProvider>
    </React.StrictMode>

  );
}
