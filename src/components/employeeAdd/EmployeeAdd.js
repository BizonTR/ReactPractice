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
        props.changedList([...props.employees, newEmployee])
    }
    return (
        <div className='container-fluid'>
            <div className='row justify-content-start'>
                <div className='card col-4 bg-dark'>
                    <div className='card-body mx-auto'>
                        <div className='card-title'>
                            <h3 className='text-white'>Employee Add</h3>
                        </div>
                        <div className='card-text'>
                            <form onSubmit={handleOnSubmit}>
                                <input id='firstname' name='firstname' type="text" placeholder='First Name' /><br></br>
                                <input id='lastname' name='lastname' type="text" placeholder='Last Name' /><br></br> 
                                <button className='btn btn-light mt-3' type='submit'>Add</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

