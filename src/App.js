import { useState } from 'react';
import './App.css';
import Counter from './components/counter/Counter';
import EmployeeList from './components/employeeList/EmployeeList';
import EmployeeUpdate from './components/employeeUpdate/EmployeeUpdate';
import { data } from './data';

const liste = [1, 2, 3, 4, 5, 6, 7]

function App() {
  const [list, setList] = useState(data)
  const [selectedEmployee,setSelectedEmployee]=useState({id: 0, firstname:"", lastname:""});
  //burada movedlist={liste} diyerek, App.js'de tanımlı "liste"'yi EmployeeList içine movedlist adı altında göndermiş oluyoruz ve EmployeeList aslında buradaki "liste'ye" movedlist şeklinde erişebiliyor.
  // 2. olan employees={list} ataması ise yukarıdaki const [list, setList] = useState(data) ile ilişkili. başlangıç değeri "data" olan bir değişkeni "list" adı altında tanımlamış ve yapılacak bir değişiklik durumunda setList ile bu yeni "list"e ulaşıyoruz.
  return (
    <div>
      <EmployeeList movedlist={liste} employees={list} changedList={setList} setSelectedEmployee={setSelectedEmployee} />
      <p>{data.length}</p>
      <Counter />
      <EmployeeUpdate  selectedEmployee={selectedEmployee} setSelectedEmployee={setSelectedEmployee} employees={list} changedList={setList}/>
    </div>)
}

export default App;