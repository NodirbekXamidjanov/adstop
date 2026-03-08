import React, { createContext, useContext, useState } from "react"

interface User {
    role?: string
    companyName?: string
    businessCategory?: string
    companyWebsite?: string
    country?: string
    workEmail?: string
    password?: string
    platform?: string
    platformUrl?: string
    contentCategory?: string
    notificationEmail?: string
}

interface RegisterData {
    role?: string
    companyName?: string
    businessCategory?: string
    companyWebsite?: string
    country?: string
    workEmail?: string
    password?: string
    platform?: string
    platformUrl?: string
    contentCategory?: string
    notificationEmail?: string
}

interface AuthContextType {
    user: User | null
    registerData: RegisterData
    updateRegisterData: (newData: Partial<RegisterData>) => void
    completeRegister: (data?: Partial<RegisterData>) => void
    logout: () => void
}


const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(() => {
        const data = localStorage.getItem("demoUser")
        return data ? JSON.parse(data) : null
    })
    const [registerData, setRegisterData] = useState<RegisterData>({})


    const updateRegisterData = (newData: Partial<RegisterData>) => {
        setRegisterData(prev => ({
            ...prev,
            ...newData
        }))
    }

    const completeRegister = (data?: Partial<RegisterData>) => {
        const finalData = { ...registerData, ...data }
        localStorage.setItem("demoUser", JSON.stringify(finalData))
        setUser(finalData)
        setRegisterData(finalData)
    }

    const logout = () => {
        localStorage.removeItem("demoUser")
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, registerData, updateRegisterData, completeRegister, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)