import { LoginForm } from "@/components/login-form"
import type React from "react"

export const Login: React.FC = () => {
    return (
        <>
            <div className="flex items-center justify-center px-4">
                <div className="w-full max-w-sm">

                    <div className="w-24 mx-auto mb-4 mt-2">
                        <img src="/image.png" alt="logo" />
                    </div>

                    <LoginForm />

                </div>
            </div>
        </>
    )
}