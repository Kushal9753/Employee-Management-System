import React from 'react'

const NewTask = ({ data, onAccept }) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl shadow-lg transition-transform hover:scale-[1.02]'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded shadow'>{data.category}</h3>
                <h4 className='text-sm font-semibold'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-bold'>{data.title}</h2>
            <p className='text-sm mt-2 text-gray-100 h-[50%] overflow-y-auto'>
                {data.description}
            </p>
            <div className='mt-4'>
                <button onClick={onAccept} className='bg-blue-600 hover:bg-blue-700 w-full py-2 rounded font-medium transition-colors shadow-md'>
                    Accept Task
                </button>
            </div>
        </div>
    )
}
export default NewTask