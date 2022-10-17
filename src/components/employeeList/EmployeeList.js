//rfc snippeti kullanılabilir.
import React from 'react'
import Employee from '../employee/Employee'

export default function EmployeeList(props) {
  return (
    <div>EmployeeList {props.employees.lenght}
    {
      props.employees.map((emp) => (<div><Employee employee={emp}  /><button>Button</button></div>))
    }
    </div>
  )
}