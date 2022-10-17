import { useState } from 'react';
import './App.css';
import EmployeeList from './components/employeeList/EmployeeList';
import { data } from './data';

const list = ["Batu","Emre","Emir","Umut","Semih","Ömer","Arda","Ali"];

function ListWriter(){
  return(list.map((name =>
    <li>{name}</li>)));
}

function ListWriter2(){
  return(data.map((employee =>
    <p>{employee.id} - {employee.firstname} {employee.lastname}</p>)));
}

const handleClearAll = () => (
  console.log ("Clear All Button has been clicked."),
  alert("ALERT")
  //this.useState({data:[]}) 
)

function App() {
  return(<div>
    <EmployeeList employees={data} />
    <button onClick={handleClearAll}>Clear All</button>
  </div>)
}

export default App;