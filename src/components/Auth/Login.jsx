
// gemini responsive


import React, { useState } from 'react'

const Login = ({handleLogin}) => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        setEmail('')
        setPassword('')

    }

  
    return (
        
        <div className='flex h-screen w-screen items-center justify-center bg-gray-50 dark:bg-gray-900'>
            
            
            <div className='border-2 border-emerald-600 p-8 sm:p-12 md:p-16 lg:p-20 rounded-xl shadow-lg bg-white dark:bg-gray-800 max-w-md w-full mx-4'> 
                
                <h2 className="text-3xl font-bold text-center mb-6 text-emerald-600 dark:text-emerald-400">Login</h2>

                <form
                    onSubmit={submitHandler}
                    className='flex flex-col gap-4' 
                >

                    
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required
                        className='w-full border-2 outline-none bg-transparent border-emerald-600 rounded-lg py-3 px-5 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-150 dark:text-white'
                        type="email"
                        placeholder='Enter your Email'
                    />


                    
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required
                        className='w-full border-2 outline-none bg-transparent border-emerald-600 rounded-lg py-3 px-5 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-150 dark:text-white'
                        type="password"
                        placeholder='Enter your Password'
                    />


                    
                    <button 
                        type="submit"
                        className='w-full outline-none bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg py-3 px-5 mt-2 transition duration-150'
                    >
                        Login
                    </button>
                </form>
            </div>

        </div>
    )
}

export default Login