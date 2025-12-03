import React from 'react'

const AcceptTask = ({ data, onUpdate, onFail }) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl shadow-lg transition-transform hover:scale-[1.02] text-black flex flex-col justify-between'>
        
        {/* Top Section: Category, Date, Title, Description */}
        <div>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-white text-sm px-3 py-1 rounded shadow'>{data.category}</h3>
                <h4 className='text-sm font-semibold'>{data.date}</h4>
            </div>
            
            <h2 className='mt-5 text-2xl font-bold'>{data.title}</h2>
            
            {/* Height ko thoda adjust kiya hai taaki buttons ke liye jagah bache */}
            <p className='text-sm mt-2 font-medium h-[100px] overflow-y-auto'>
                {data.description}
            </p>
        </div>

        {/* Bottom Section: Buttons */}
        <div className='flex justify-between mt-4 gap-2'>
            <button onClick={onUpdate} className='bg-green-600 hover:bg-green-700 text-white py-2 px-3 text-sm rounded w-1/2 font-medium shadow-md transition-colors'>
                Mark Completed
            </button>
            <button onClick={onFail} className='bg-red-600 hover:bg-red-700 text-white py-2 px-3 text-sm rounded w-1/2 font-medium shadow-md transition-colors'>
                Mark Failed
            </button>
        </div>
        
    </div>
  )
}

export default AcceptTask