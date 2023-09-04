import {MouseEvent} from 'react';
function ListGroup() { 
  let items = [
    'Manhattan',
    'New York',
    'Chikaqo',
    'Washinqton',
    'Los Angeles'
  ]
  const handleEvent = (event : MouseEvent) => console.log(event)
    return (
    <>
      <h1>List group</h1>
      <ul className="list-group">
          {items.map((item) => <li className ='list-group-item' key={item} onClick={handleEvent}>{item}</li>)}
      </ul>
    </>
  );
}
export default ListGroup;
