import { LoginForm } from "@/components/login-form"
import type React from "react"
import { useNavigate } from "react-router"

export const Login: React.FC = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="flex items-center justify-center px-4">
                <div className="w-full max-w-sm">

                    <div className="w-24 mx-auto mb-4 mt-2 cursor-pointer" onClick={() => navigate("/")}>
                        <img src="/image.png" alt="logo" />
                    </div>

                    <LoginForm />

                </div>
            </div>
        </>
    )
}