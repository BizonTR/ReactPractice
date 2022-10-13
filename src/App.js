import './App.css';
import { employees } from './index';

const list = ["Batu","Emre","Emir","Umut","Semih","Ömer","Arda"]

function ListWriter(){
  return(list.map((name =>
    <li>{name}</li>)));
}

function ListWriter2(){
  return(employees.map((employee =>
    <p>{employee.id}</p>)));
}

function App() {
  return(<div>
  <p>HELLO WORLD</p>
  <section>{<ul>{ListWriter()}</ul>}</section>
  <section>{ListWriter2()}</section>
  </div>)
}

export default App;