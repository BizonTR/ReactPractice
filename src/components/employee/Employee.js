import { useNavigate } from "react-router-dom";

export default function Employee({ employee, handleClearOne, setSelectedEmployee }) {

  const navigate = useNavigate();

  const handleSelectedEmployee = (emp) => {
    setSelectedEmployee(emp);
    navigate(`/employees/update/${emp.id}`)
  }

  return (
    <div>
      {employee.firstname} {employee.lastname}
      <button onClick={() => handleClearOne(employee.id)}>Remove</button>
      <button onClick={() => handleSelectedEmployee(employee)}>Select</button>
    </div>
  )
}
