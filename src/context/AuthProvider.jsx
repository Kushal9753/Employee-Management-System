import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AUthContext = createContext()

const AuthProvider = ({ children }) => {
    // LocalStorage se data load karo
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        setLocalStorage()
        const { employees } = getLocalStorage()
        setUserData(employees)
    }, [])

    return (
        <AUthContext.Provider value={[userData, setUserData]}>
            {children}
        </AUthContext.Provider>
    )
}

export default AuthProvider