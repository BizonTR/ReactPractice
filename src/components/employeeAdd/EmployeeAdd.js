import React from 'react'

export default function EmployeeAdd(props) {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const newEmployee = {
            id: props.employees.length + 1,
            firstname: e.target.firstname.value,
            lastname: e.target.lastname.value
        }
        console.log(newEmployee.firstname, newEmployee.lastname)
        props.changedList([...props.employees,newEmployee])
    }
    return (
        <div>
            <h3>Employee Add</h3>
            <form onSubmit={handleOnSubmit}>
                <input id='firstname' name='firstname' type="text" placeholder='First Name'/><br></br>
                <input id='lastname' name='lastname' type="text" placeholder='Last Name'/><br></br> <button type='submit'>Add</button>
            </form>
        </div>
    )
}

