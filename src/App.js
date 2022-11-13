import { useContext, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Counter from './components/counter/Counter';
import EmployeeAdd from './components/employeeAdd/EmployeeAdd';
import EmployeeList from './components/employeeList/EmployeeList';
import EmployeeUpdate from './components/employeeUpdate/EmployeeUpdate';
import AppContext from './contexts/AppContext';

function App() {
  const {appName, list, setList, setSelectedEmployee, selectedEmployee} = useContext(AppContext)
  //burada movedlist={liste} diyerek, App.js'de tanımlı "liste"'yi EmployeeList içine movedlist adı altında göndermiş oluyoruz ve EmployeeList aslında buradaki "liste'ye" movedlist şeklinde erişebiliyor.
  // 2. olan employees={list} ataması ise yukarıdaki const [list, setList] = useState(data) ile ilişkili. başlangıç değeri "data" olan bir değişkeni "list" adı altında tanımlamış ve yapılacak bir değişiklik durumunda setList ile bu yeni "list"e ulaşıyoruz.
  return (
    <div>
      <h1>{appName}</h1>

      <ul>
        <li><Link to="/">HomePage</Link></li>
        <li><Link to="/employees">Employees</Link></li>
        <li><Link to="/employees/add">Employee Add</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/employees/update">Employee Update</Link></li>
      </ul>

      <Routes>
        <Route path='/employees' element={<EmployeeList />}></Route>
        <Route path='/counter' element={<Counter />}></Route>
        <Route path='/employees/update/:id' element={<EmployeeUpdate />}></Route>
        <Route path='/employees/add' element={<EmployeeAdd />}></Route>
        <Route path='/employees/update' element={<EmployeeUpdate />}></Route>
      </Routes>
    </div>)
}

export default App;