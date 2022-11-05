import { useContext, useState } from 'react';
import './App.css';
import Counter from './components/counter/Counter';
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
      <EmployeeList/>
      <EmployeeUpdate />
      <Counter />
    </div>)
}

export default App;