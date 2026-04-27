import './TabButton.css';

export default function TabButton({children, onSelect}){
    function handleClick(){
        console.loh('Hello World');
    }
    return(
        <li>
            <button className = {isSelected ? 'active' : ''} onClick={onselect}>{children}</button>
        </li>
    )
}