import React, { useContext } from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import { AUthContext } from '../../context/AuthProvider'

const TaskList = ({ data }) => {
    const [userData, setUserData] = useContext(AUthContext)

    // Task Status Update Logic
    const updateTaskStatus = (taskIndex, status) => {
        const updatedData = [...userData]
        const employeeIdx = updatedData.findIndex(e => e.id === data.id)
        
        if (employeeIdx !== -1) {
            const task = updatedData[employeeIdx].tasks[taskIndex]
            const counts = updatedData[employeeIdx].taskCount

            // Logic to handle status changes
            if (status === 'accept') {
                task.active = true
                task.newTask = false
                counts.newTask -= 1
                counts.active += 1
            } else if (status === 'complete') {
                task.completed = true
                task.active = false
                counts.active -= 1
                counts.completed += 1
            } else if (status === 'fail') {
                task.failed = true
                task.active = false
                counts.active -= 1
                counts.failed += 1
            }

            // Save to State and LocalStorage
            setUserData(updatedData)
            localStorage.setItem('employees', JSON.stringify(updatedData))
        }
    }

    return (
        <div id='tasklist' className='h-[50vh] overflow-x-auto w-full py-5 flex items-center justify-start gap-5 flex-nowrap mt-10 pb-10'>
            {data.tasks.map((elem, idx) => {
                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} onUpdate={() => updateTaskStatus(idx, 'complete')} onFail={() => updateTaskStatus(idx, 'fail')} />
                }
                if (elem.newTask) {
                    return <NewTask key={idx} data={elem} onAccept={() => updateTaskStatus(idx, 'accept')} />
                }
                if (elem.completed) {
                    return <CompleteTask key={idx} data={elem} />
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} />
                }
                return null;
            })}
        </div>
    )
}

export default TaskList