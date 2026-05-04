import TabButton from "./TabButton/TabButton";
import CoreConcept from "./CoreConcepts/CoreConcept";
import {useState} from 'react';
import { EXAMPLES } from "../data";
import Section from './Section.jsx'
import Tabs from "./Tabs.jsx";

export default function Examples(){
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
        <Section id="examples">
            <Tabs
            buttonsContainer = "menu"
             buttons={
                <>
                <TabButton isSelected={selectedTopic==="componets"} onClick={()=>handleSelect("components")}>Components</TabButton>
                <TabButton isSelected={selectedTopic==="jsx"} onClick={()=>handleSelect("jsx")}>JSX</TabButton>
                <TabButton isSelected={selectedTopic==="props"} onClick={()=>handleSelect("props")}>Props</TabButton>
                <TabButton isSelected={selectedTopic==="state"} onClick={()=>handleSelect("state")}>State</TabButton>
    </>
            }>
                (tabContent)
            </Tabs>
     <h2>Examples</h2>
    <menu>
    
    </menu>
    {tabContent}
</Section>
    )
}