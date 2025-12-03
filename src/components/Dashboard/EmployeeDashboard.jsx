import React, { useContext, useEffect, useState } from 'react'
import Header from '../../other/Header'
import TaskListNumbers from '../../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
import { AUthContext } from '../../context/AuthProvider'

const EmployeeDashboard = (props) => {
    const [userData, setUserData] = useContext(AUthContext)
    const [currentEmployee, setCurrentEmployee] = useState(props.data)

    // Jab bhi global userData change ho, current employee ka data update karo
    useEffect(() => {
        if (userData) {
            const updatedEmployee = userData.find(e => e.id === props.data.id)
            if (updatedEmployee) {
                setCurrentEmployee(updatedEmployee)
            }
        }
    }, [userData, props.data.id])

    return (
        <div className='p-5 md:p-10 bg-[#1c1c1c] min-h-screen'>
            <Header changeUser={props.changeUser} data={currentEmployee} />
            <TaskListNumbers data={currentEmployee} />
            <TaskList data={currentEmployee} />
        </div>
    )
}

export default EmployeeDashboard