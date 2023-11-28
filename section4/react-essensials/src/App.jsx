import { Fragment } from 'react';
import Header from './components/Header/Header.jsx';
import { EXAMPLES } from './data.js';
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

function App() {
  console.log('APP COMPONENT EXECUTING');

  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts></CoreConcepts>
        <Examples></Examples>
      </main>
    </Fragment>
  );
}

export default App;
