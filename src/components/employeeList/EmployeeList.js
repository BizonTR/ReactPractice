//rfc snippeti kullanılabilir.
import React from 'react'
import Employee from '../employee/Employee'
import EmployeeAdd from '../employeeAdd/EmployeeAdd'

export default function EmployeeList(props) {
  const handleClearAll = () => (
    alert("ALERT"),
    props.changedList([])
  )
  const handleClearOne = (id) => {
    props.changedList(props.employees.filter(emp => emp.id!==id))
  }
  //(App.js 25. satır ile ilişkili) => Burada da App.js'den gelen employees'i karşılamamız gerekir. bu sınıftaki fonksiyona parametre olarak "props" vererek bu sınıfa başka yerlerden gönderilen verileri "props." şeklinde kullanabiliriz.
  return (
    <div>
      EmployeeList {props.employees.length}
      {
        props.employees.map((emp) => (<div><Employee employee={emp} handleClearOne={handleClearOne} /></div>))
      }
      <button onClick={handleClearAll}>Clear All</button>
      <button onClick={() => handleClearOne(1)}>ClearOne</button>
      {
        props.movedlist.map((item) => (<p>{item}</p>))
      }
      <EmployeeAdd employees = {props.employees} changedList = {props.changedList}/>
    </div>
  )
}