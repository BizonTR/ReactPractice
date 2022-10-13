import './App.css';
import { employees } from './data';

const list = ["Batu","Emre","Emir","Umut","Semih","Ömer","Arda","Ali"];

function ListWriter(){
  return(list.map((name =>
    <li>{name}</li>)));
}

function ListWriter2(){
  return(employees.map((employee =>
    <p>{employee.id} - {employee.firstname} {employee.lastname}</p>)));
}

function App() {
  return(<div>
  <p>HELLO WORLD</p>
  <section>{<ul>{ListWriter()}</ul>}</section>
  <section>{ListWriter2()}</section>
  </div>)
}

export default App;