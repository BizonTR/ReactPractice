import React from 'react'

export default function Employee({employee}) {
  return (
    <div>
        {employee.firstname} {employee.lastname}
    </div>
  )
}
