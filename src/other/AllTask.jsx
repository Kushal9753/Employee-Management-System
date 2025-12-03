import React, { useContext } from 'react'
import { AUthContext } from '../context/AuthProvider'


const AllTask = () => {

   const [userData, setUserData] = useContext(AUthContext)

   const deleteTask = (employeeId, taskIndex) => {
        // 1. Data ki copy banao
        const data = [...userData]
        
        // 2. Us employee ko dhundo
        const employee = data.find(emp => emp.id === employeeId)
        
        if(employee) {
            // 3. Task remove karo
            // Jis task ko remove kar rahe hain, uska status check karke count kam karna padega
            const taskToRemove = employee.tasks[taskIndex];
            
            if(taskToRemove.newTask) employee.taskCount.newTask -= 1;
            if(taskToRemove.active) employee.taskCount.active -= 1;
            
            // Task array se hatao
            employee.tasks.splice(taskIndex, 1)
            
            // 4. State aur LocalStorage update karo
            setUserData(data)
            localStorage.setItem('employees', JSON.stringify(data))
            
            // Optional: Alert
            // alert("Task Deleted Successfully")
        }
   }

  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-60 overflow-auto'>
        
        {/* Header */}
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5'>Completed</h5>
            <h5 className='text-lg font-medium w-1/5'>Failed</h5>
            <h5 className='text-lg font-medium w-1/5'>Action</h5> {/* Action Column Added */}
        </div>
        
        {/* List */}
        <div className=''>
        {userData.map(function(elem, i){
            return elem.tasks.map((task, j) => (
                <div key={`${i}-${j}`} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded items-center'>
                    <h2 className='text-lg font-medium w-1/5 text-white'>{elem.firstName}</h2>
                    <h3 className='text-lg font-medium w-1/5 text-blue-400'>{task.title}</h3> {/* Count ki jagah Task Title dikhaya taaki pata chale kya delete ho raha hai */}
                    <h5 className='text-sm font-medium w-1/5 text-yellow-400'>{task.active ? 'Active' : 'Inactive'}</h5>
                    <h5 className='text-sm font-medium w-1/5 text-white'>{task.completed ? 'Yes' : 'No'}</h5>
                    <h5 className='text-sm font-medium w-1/5 text-red-600'>{task.failed ? 'Yes' : 'No'}</h5>
                    
                    {/* Delete Button */}
                    <div className='w-1/5'>
                        <button 
                            onClick={() => deleteTask(elem.id, j)}
                            className='bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 rounded transition-all'
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))
        })}
        </div>
        
    </div>
  )
}

export default AllTask