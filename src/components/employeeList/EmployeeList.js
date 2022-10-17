//rfc snippeti kullanılabilir.
import React from 'react'
import Employee from '../employee/Employee'

export default function EmployeeList(props) {
  const handleClearAll = () => (
    alert("ALERT"),
    props.changedList([])
  )
  //(App.js 25. satır ile ilişkili) => Burada da App.js'den gelen employees'i karşılamamız gerekir. bu sınıftaki fonksiyona parametre olarak "props" vererek bu sınıfa başka yerlerden gönderilen verileri "props." şeklinde kullanabiliriz.
  return (
    <div>
      EmployeeList {props.employees.length}
      {
        props.employees.map((emp) => (<div><Employee employee={emp}  /></div>))
      }
      <button onClick={handleClearAll}>Clear All</button>
      {
      props.movedlist.map((item) => (<p>{item}</p>))
      }
    </div>
  )
}