import { CORE_CONCEPTS , EXAMPLES} from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcepts/CoreConcept';
import TabButton from './components/TabButton/TabButton';
import { useState } from 'react';
// function UserData(){
//   const user = {first:"George",last:"Salayka", age:"40" };

//   return (
//     <div>
//       <h2>Name: {user.last}, {user.first}</h2>
//       <h3>Age: {user.age}</h3>
//     </div>
//   )
// }

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  let tabContent = <p>Plese Seclect a topic</p>;
  if(selectedTopic){
    tabContent = (
                <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic.code]}
              </code>
            </pre>
          </div>
    )
  }

  function handleSelect(selectedbutton){
    setSelectedTopic(selectedbutton);
   console.log(selectedTopic);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {
              CORE_CONCEPTS.map((conceptItem)=>{
                <CoreConcept key={conceptItem.title} {...conceptItem} />
              })
            }
          </ul>
        </section>
        <section> id="examples"
          <h2>Examples</h2>
          <menu>
            <TabButton> isSelected={selectedTopic==="componets"} onSelect={()=>handleSelect("components")}</TabButton>
            <TabButton> isSelected={selectedTopic==="jsx"} onSelect={()=>handleSelect("jsx")}</TabButton>
            <TabButton> isSelected={selectedTopic==="props"} onSelect={()=>handleSelect("props")}</TabButton>
            <TabButton> isSelected={selectedTopic==="state"} onSelect={()=>handleSelect("state")}</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
