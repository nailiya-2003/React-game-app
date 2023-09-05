import Alert from "./components/Alert";
import Buttons from "./components/Buttons";
import {useState} from "react"

// import ListGroup from "./components/ListComponent";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false)
  return <div>
    {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
    <Buttons onClick={() => setAlertVisibility(true)}>Click me</Buttons></div>
}
export default App;
  // return (<div><Alert>
  //   Hello <span>World</span></Alert></div>);
  // let items = [
  //   'Manhattan',
  //   'New York',
  //   'Chikaqo',
  //   'Washinqton',
  //   'Los Angeles'
  // ]
  // const handleSelected = (item: string) => {
  //   console.log(item);
  // }
  // const handleSelectedHeading = (heading: string) => {
  //   console.log(heading);
  // }
  // return <ListGroup items={items} heading="Cities" onSelectedItem={handleSelected} onSelectedHeading={handleSelectedHeading}/ >

