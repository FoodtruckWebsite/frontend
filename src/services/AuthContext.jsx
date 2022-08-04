import React, { createContext, useState, useEffect } from 'react'
import AuthService from './AuthService'

export const AuthContext = createContext()

export default ({ children }) => {
        // user is logged in
        const [user, setUser] = useState(null)
        // user is authenticated
        const [isAuthenticated, setIsAuthenticated] = useState(false)
    
        useEffect(() => {
            AuthService.isAuthenticated().then(data => {
                setUser(data.user)
                setIsAuthenticated(data.isAuthenticated)
            })
        }, [])
    
        // setting up the the states and functions to be global in are app
        return (
        <> 
        <AuthContext.Provider value={{user, setUser, isAuthenticated, setIsAuthenticated}}>
            { children }
        </AuthContext.Provider>
        </>
        )
}