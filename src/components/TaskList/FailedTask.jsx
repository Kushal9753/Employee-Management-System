import React from 'react'

const FailedTask = ({ data }) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl shadow-lg transition-transform hover:scale-[1.02]'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded shadow'>{data.category}</h3>
                <h4 className='text-sm font-semibold'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-bold'>{data.title}</h2>
            <p className='text-sm mt-2 text-gray-100 h-[50%] overflow-y-auto'>
                {data.description}
            </p>
            <div className='mt-4'>
                <button className='w-full bg-red-700 text-white py-2 rounded cursor-not-allowed opacity-80'>
                    Failed ❌
                </button>
            </div>
        </div>
    )
}
export default FailedTask