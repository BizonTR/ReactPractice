//rfc snippeti kullanılabilir.
import React, { useContext } from 'react'
import AppContext from '../../contexts/AppContext'
import Employee from '../employee/Employee'
import EmployeeAdd from '../employeeAdd/EmployeeAdd'

export default function EmployeeList() {
  const {employees, changedList, setSelectedEmployee} = useContext(AppContext)

  const handleClearAll = () => {
    alert("ALERT");
    changedList([]);
  }
  const handleClearOne = (id) => {
    changedList(employees.filter(emp => emp.id!==id))
  }
  //(App.js 25. satır ile ilişkili) => Burada da App.js'den gelen employees'i karşılamamız gerekir. bu sınıftaki fonksiyona parametre olarak "props" vererek bu sınıfa başka yerlerden gönderilen verileri "props." şeklinde kullanabiliriz.
  return (
    <div>
      EmployeeList ({employees.length} Members)
      {
        employees.map((emp) => (<div><Employee employee={emp} handleClearOne={handleClearOne} setSelectedEmployee={setSelectedEmployee}/></div>))
      }
      <button onClick={handleClearAll}>Clear All</button>
      <button onClick={() => handleClearOne(1)}>ClearOne</button>
    </div>
  )
}