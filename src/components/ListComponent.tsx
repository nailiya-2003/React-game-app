import {useState} from 'react'
interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
  onSelectedHeading: (heading: string) => void;
}

function ListGroup({items, heading, onSelectedItem}: Props) { 
 
  const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
    <>
      <h1 onClick={() => onSelectedItem(heading)}>{heading}</h1>
      <ul className="list-group">
          {items.map((item, index) => <li className ={selectedIndex === index ? 'list-group-item active' : 'list-group-item' } key={item} onClick={() => {setSelectedIndex(index), onSelectedItem(item)}}>{item}</li>)}
      </ul>
    </>
  );
}
export default ListGroup;
