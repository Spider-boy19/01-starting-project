 import './CoreConcepts.css';
export default function CoreConcept({image, title, description}){
  console.log("Creating core concept");
  return(
    <li>
      <img src={image} alt={image}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}