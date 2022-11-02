export default function Employee({employee, handleClearOne, setSelectedEmployee}) {

  const handleSelectedEmployee = (emp) => {
    setSelectedEmployee(emp);
  }

  return (
    <div>
        {employee.firstname} {employee.lastname}
        <button onClick={() => handleClearOne(employee.id)}>Remove</button>
        <button onClick={() => handleSelectedEmployee(employee)}>Select</button>
    </div>
  )
}
