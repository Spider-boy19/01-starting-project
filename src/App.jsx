import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcepts/CoreConcept';
import TabButton from './components/TabButton/TabButton';
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
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept
              {
              ...CORE_CONCEPTS[0]
              }
            />
            <CoreConcept
              {
              ...CORE_CONCEPTS[1]
              }
            />
            <CoreConcept
              {
              ...CORE_CONCEPTS[2]
              }
            />
            <CoreConcept
              {
              ...CORE_CONCEPTS[3]
              }
            />
            {
              // CORE_CONCEPTS.map((concept)=><CoreConcept {...concept}/>)
            }
          </ul>
        </section>
        <section> id="examples"
          <h2>Examples</h2>
          <menu>
            <TabButton>Componets</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
