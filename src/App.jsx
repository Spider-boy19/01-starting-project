import { CORE_CONCEPTS , EXAMPLES} from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcepts/CoreConcept';
import TabButton from './components/TabButton/TabButton';
import { useState } from 'react';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import Examples from './components/Examples';
function App(){

  return (
     <div>
      <Header/>
      <main>
      <CoreConcepts/>
      <Examples/>
      </main>
    </div>
   );
  }


export default App;
