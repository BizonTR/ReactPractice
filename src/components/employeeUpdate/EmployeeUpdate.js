import React, { useContext } from 'react'
import AppContext from '../../contexts/AppContext'

export default function EmployeeUpdate() {
    const { employees, changedList, selectedEmployee, setSelectedEmployee } = useContext(AppContext)

    const handleChange = (e) =>{
        setSelectedEmployee({
            ...selectedEmployee,
            [e.target.name] : e.target.value
        })
    }

    const handleUpdateEmployee = (e)=>{
        e.preventDefault();
        changedList([
            ...employees.filter(emp => emp.id!== selectedEmployee.id),
            selectedEmployee
        ])
    }

    return (
        <div>
            <h3>EmployeeUpdate</h3>
            <p>
                {JSON.stringify(selectedEmployee)}
            </p>
            <div className='container-fluid'>
                <div className='row justify-content-start'>
                    <div className='card col-4 bg-dark'>
                        <div className='card-body mx-auto'>
                            <div className='card-title'>
                                <h3 className='text-white'>Employee Update</h3>
                            </div>
                            <div className='card-text'>
                                <form onSubmit={handleUpdateEmployee}>
                                    <input id='firstname' name='firstname' onChange={handleChange} value={selectedEmployee?.firstname} type="text" placeholder='First Name' /><br></br>
                                    <input id='lastname' name='lastname' onChange={handleChange} value= {selectedEmployee?.lastname}type="text" placeholder='Last Name' /><br></br>
                                    <button className='btn btn-light mt-3' type='submit'>Update</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
