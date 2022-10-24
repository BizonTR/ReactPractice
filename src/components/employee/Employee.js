import React, { useState } from 'react'
import EmployeeAdd from '../employeeAdd/EmployeeAdd'
import EmployeeList from '../employeeList/EmployeeList'

export default function Employee({employee, handleClearOne}) {
  return (
    <div>
        {employee.firstname} {employee.lastname}
        <button onClick={() => handleClearOne(employee.id)}>Remove</button>
    </div>
  )
}
